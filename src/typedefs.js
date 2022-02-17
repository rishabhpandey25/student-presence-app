/**
 * @typedef {object} userCredentials
 * @property {string} email -  The email of user
 * @property {string} password - The password of user
 */

/**
 * @typedef {object} authResponse
 * @property {boolean} exists - boolean response to if the email is registered
 * @property {userCredentials} info  - credentials of user 
 * @property {string} error - error string if any occurs
 */
