const SESSION_ID_CHARS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-';
const SESSION_ID_LENGTH = 7;

export const generateId = (): string =>
  Array.from({ length: SESSION_ID_LENGTH }, () =>
    SESSION_ID_CHARS.charAt(
      Math.floor(Math.random() * SESSION_ID_CHARS.length),
    ),
  ).join('');