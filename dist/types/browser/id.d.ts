/**
 * Converts a normal hexadecimal string into the alphabet used by extensions.
 * We use the characters 'a'-'p' instead of '0'-'f' to avoid ever having a
 * completely numeric host, since some software interprets that as an IP address.
 *
 * @param id - The hexadecimal string to convert. This is modified in place.
 */
export declare function convertHexadecimalToIDAlphabet(id: string): string;
export declare function generateId(input: string): string;
