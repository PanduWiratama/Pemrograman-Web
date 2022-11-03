//membuat element yang dinamis berdasarkan event handler
function tombol() {
    //membuat teks kedalam id/class html
    const task3 = document.getElementById("task3");
    task3.innerHTML = "PORTOFOLIO";

    const portofolio = document.getElementById('portofolio');
    portofolio.innerHTML = 
    '<table border="10" align="center"> <tr> <td> <img src="http://sso.itera.ac.id/assets/img/20220814234302_pandu_120140170_student_itera_ac_id.jpg" alt=""> <h1>Pandu Wiratama</h1> <h3>Institut Teknologi Sumatera</h3> <br> <nav> <a href="#tentangsaya">Tentang Saya</a> <a href="#jadwalkuliah">Jadwal Kuliah</a> <a href="#kontak">Kontak</a> </nav> <br> <h2 id="tentangsaya">Tentang Saya</h2> <p>Nama saya adalah Pandu Wiratama. Saya berasal dari Dusun Taman Rejo RT.003 RW.005 Bernung, Kecamatan Gedong Tataan Kabupaten Pesawaran - Lampung. Saat ini saya sedang menjalani pendidikan semester 5 di perguruan tinggi Institut Teknologi Sumatera dengan mengambil program studi Teknik Informatika.</p> <iframe src="https://www.youtube.com/embed/5DPTz-hRG4c"></iframe> <br> <br> <h2 id="jadwalkuliah">Jadwal Kuliah</h2> <table border="1"> <tr> <th rowspan="3">No</th> <th rowspan="3">Hari</th> <th rowspan="3">Mata Kuliah</th> <tr> <th colspan="2">Waktu</th> </tr> <tr> <th>Mulai</th> <th>Selesai</th> </tr> </tr> <tr> <td>1</td> <td>Senin</td> <td>Jaringan Komputer</td> <td>10.15</td> <td>12.00</td> </tr> <tr> <td>2</td> <td>Senin</td> <td>Sistem Informasi</td> <td>13.20</td> <td>15.00</td> </tr> <tr> <td>3</td> <td>Kamis</td> <td>Manajemen Proyek Teknologi Informasi</td> <td>07.30</td> <td>10.00</td> </tr> <tr> <td>4</td> <td>Kamis</td> <td>Interaksi Manusia dan Komputer</td> <td>13.00</td> <td>15.00</td> </tr> <tr> <td>5</td> <td>Jumat</td> <td>Pemrograman Web</td> <td>07.00</td> <td>08.40</td> </tr> <tr> <td>6</td> <td>Jumat</td> <td>Intelegensi Buatan</td> <td>09.30</td> <td>12.00</td> </tr> <tr> <td>7</td> <td>Jumat</td> <td>Manajemen Basis Data</td> <td>13.30</td> <td>15.30</td> </tr> <tr> <td>8</td> <td>Jumat</td> <td>Sistem Tertanam</td> <td>15.30</td> <td>17.10</td> </tr> </table> <br> <form action="#"> <h2 id="kontak">Kontak</h2> <p> <label for="Cari">Nama :</label> <input type="text" id="Cari" name="Cari" > <br> <h4>Sudah tahu kontak saya ?</h4> <input type="radio" name="fav_belum" value="Belum">Belum <br> <input type="radio" name="fav_sudah" value="Sudah">Sudah <br> <br> <input type="checkbox" name="kontak" id="linkedin" value="linkedin">likedin <br> <input type="checkbox" name="kontak" id="github" value="github">github <br> <input type="checkbox" name="kontak" id="instagram" value="instagram">instagram <br> <input type="checkbox" name="kontak" id="no.telp" value="no.telp">no.telp <br> <br> <button type="button">Kirim</button> </form> </td> </tr> </table>';

    //membuat element html kedalam id/class html
    const div = document.createElement('p');
    const teksDiv = document.createTextNode("Pandu Wiratama | 12014070");

    div.appendChild(teksDiv);
    const cetak = document.getElementById('body');
    cetak.appendChild(div);
}