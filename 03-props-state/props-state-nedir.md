# Props ve State Nedir?

React’te veri yönetimi iki temel kavrama dayanır:

✔ Props  
✔ State  

---

## 📌 Props Nedir?

Props = Componentler arası veri taşımayı sağlar.

👉 Parent component → Child component veri gönderir.

---

### Props Özellikleri

✔ Sadece okunabilir  
✔ Parent tarafından gönderilir  
✔ Child component değiştiremez  

---

### Props Kullanım Örneği

```jsx
function Welcome(props) {
  return <h1>Merhaba {props.name}</h1>;
}

function App() {
  return <Welcome name="Sinem" />;
}
