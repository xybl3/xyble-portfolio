const KEY = "state";

export function saveState(state: unknown) {
  try {
    const serializedJSON = JSON.stringify(state);
    if (serializedJSON === undefined) {
      throw Error;
    }
    localStorage.setItem(KEY, serializedJSON);
  } catch (e) {}
}

export function loadState() {
  try {
    const serializedJSON = localStorage.getItem(KEY);
    if (serializedJSON === null) {
      throw Error();
    }
    const jsonData = JSON.parse(serializedJSON);
    return jsonData;
  } catch (e) {}
}
