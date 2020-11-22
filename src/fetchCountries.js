
export default function fetchCountries(url) {
  return fetch(url)
    .then((r) => r.json())
    ;
}
