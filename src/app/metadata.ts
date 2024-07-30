const metadataBaseURL = process.env.NEXT_PUBLIC_METADATA_BASE || 'http://localhost:3000';

export const metadataBase = new URL(metadataBaseURL);