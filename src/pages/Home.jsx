export default function Home(){
  return (
    <section>
      <h2>Selamat datang di Responsi Modul 4</h2>
      <p>Aplikasi contoh Progressive Web App sederhana dengan beberapa halaman statis.</p>

      <div className="cards">
        <article className="card">
          <h3>Tentang Aplikasi</h3>
          <p>Halaman ini menunjukkan bagaimana PWA bekerja: installable & offline-ready.</p>
        </article>
        <article className="card">
          <h3>Profil</h3>
          <p>Halaman profil berisi data statis (nama, NIM, kelompok).</p>
        </article>
      </div>
    </section>
  )
}
