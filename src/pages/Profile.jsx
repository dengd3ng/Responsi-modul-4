export default function Profile(){
  return (
    <section>
      <h2>Profil</h2>
      <div className="profile-card">
        <img src="/icons/icon.svg" alt="avatar" className="avatar" />
        <dl>
          <dt>Nama</dt>
          <dd>Denzel Helguera Simanjutak</dd>

          <dt>NIM</dt>
          <dd>21120123130077</dd>

          <dt>Kelompok</dt>
          <dd>Kelompok 32</dd>
        </dl>
      </div>

      <p>Semua data di atas bersifat statis.</p>
    </section>
  )
}
