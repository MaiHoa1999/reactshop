export function getQuery() {
  var search = window.location.search.substring(1);

  return !search
    ? {}
    : JSON.parse(
        '{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
        function (key, value) {
          return key === "" ? value : decodeURIComponent(value);
        }
      );
}

export const reverse = function (obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
};
