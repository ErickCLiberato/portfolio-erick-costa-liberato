# Security Specification - QR Generator

## Data Invariants
- A `User` document must be owned by the authenticated user with the corresponding `uid`.
- A `QRConfig` must be nested under the user who created it and must contain a `userId` field matching the parent `userId`.
- Timestamps (`createdAt`, `updatedAt`) must be server-generated (`request.time`).
- Document IDs must follow strict formatting rules (`isValidId`).

## The Dirty Dozen Payloads
1. **Identity Spoofing**: Attempting to create a `User` document with a different `uid` than the authenticated user.
2. **Resource Poisoning**: Injection of malicious or excessively large document IDs.
3. **Ghost Field Update**: Attempting to add unvalidated fields like `isAdmin` to a user profile.
4. **Timestamp Manipulation**: Providing a client-side `updatedAt` instead of `request.time`.
5. **Unauthorized Access**: User A attempting to read/list configurations of User B.
6. **Cross-User Injection**: User A attempting to create a config in User B's subcollection.
7. **Type Mismatch**: Sending a string instead of an object for the `config` field in `QRConfig`.
8. **Orphaned Writes**: Creating a config without a valid parent User document (using `exists`).
9. **Terminal State Bypass**: (N/A for this app yet, but we'll protect status if added).
10. **Shadow List Scraping**: Attempting to list all users' configs without filtering by `userId`.
11. **Size Exhaustion**: Sending a 1MB `name` string to cause "Denial of Wallet".
12. **ID Poisoning**: Using a path variable containing special characters to bypass standard ID checks.

## Test Runner (Draft)
The tests will ensure all above payloads return `PERMISSION_DENIED` unless matching the owner's `uid` and schema.
