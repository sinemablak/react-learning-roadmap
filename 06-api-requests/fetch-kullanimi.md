# Fetch Kullanımı

Fetch, JavaScript’in yerleşik veri çekme yöntemidir.

---

## Temel Kullanım

```jsx
fetch("API_URL")
  .then(res => res.json())
  .then(data => console.log(data));
