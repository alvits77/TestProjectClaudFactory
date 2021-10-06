export const runRequest = async <T>(action: string): Promise<T> => {
  return fetch(action).then(async response => {
    if (response.ok) {
      const text = await response.text();
      try {
        return JSON.parse(text);
      } catch (err) {
        // если не получилось распарсить то делаем reject
        console.warn('Не удалось распарсить JSON');
        return Promise.reject(text);
      }
    } else {
      // если что-то не то с запросом, то тоже делаем reject
      console.warn('Ошибка выполнения запроса');
      return Promise.reject(response);
    }
  });
};
