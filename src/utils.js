const REGEX_STRIP_WWW = /^www\./;
export const getHostname = href => {
  const { hostname } = new URL(href);
  return hostname.replace(REGEX_STRIP_WWW, '');
};

export const isValidImageURL = src => {
  if (typeof src !== 'string') return false;
  return !!src.match(/\w+\.(a?png|gif|jpe?g|svg|webp)/gi)
}

export const findFirstSecureUrl = (records, condition) => {
  const result = records.find(record => condition(record) && record.startsWith('https://'));
  return result ? result : '';
}