# PreliminaryTestFamilyMart

Source code ada di branch master.

Sebagai penjelasan, untuk struktur database saya membuat 3 table yaitu:

1. m_user - sebagai table untuk menyimpan data diri karyawan termasuk foto yang diencode dalam bentuk base64
2. m_position - table yang berelasi dengan m_user untuk menyimpan data master role/jabatan untuk user
3. r_attendance - table yg berelasi dengan m_user untuk menyimpan data absensi berupa jam check-in/check-out beserta koordinat dan informasi negara dan kota tempat pegawai tersebut commit absen pada hari itu
