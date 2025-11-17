export default function About(){
  return (
    <section>
      <h2>Tentang</h2>
      <p>Ini adalah aplikasi PWA untuk Responsi. Semua data di aplikasi bersifat statis.</p>

      <h3>Fitur</h3>
      <ul>
        <li>Ada 3 halaman: Beranda, About, Profil</li>
        <li>Installable (manifest + service worker)</li>
        <li>Offline fallback saat tidak ada jaringan</li>
      </ul>
    </section>
  )
}
