# PreliminaryTestFamilyMart

Source code ada di branch master.

Sebagai penjelasan, untuk struktur database (Postgresql) saya membuat 3 table yaitu:

1. m_user - sebagai table untuk menyimpan data diri karyawan termasuk foto yang diencode dalam bentuk base64
2. m_position - table yang berelasi dengan m_user untuk menyimpan data master role/jabatan untuk user
3. r_attendance - table yg berelasi dengan m_user untuk menyimpan data absensi berupa jam check-in/check-out beserta koordinat dan informasi negara dan kota tempat pegawai tersebut commit absen pada hari itu

---- QUERY DDL DATABASE ----

CREATE TABLE public.m_user (
	user_id uuid NOT NULL,
	fullname varchar NULL,
	username varchar NULL,
	"password" varchar NULL,
	email varchar NULL,
	profile_picture text NULL,
	position_id uuid NULL,
	CONSTRAINT m_user_pk PRIMARY KEY (user_id)
);

CREATE TABLE public.m_position (
	position_id uuid NOT NULL,
	"name" varchar NULL,
	start_time time(0) NULL,
	end_time time(0) NULL,
	CONSTRAINT m_position_pk PRIMARY KEY (position_id),
	CONSTRAINT m_position_fk FOREIGN KEY (position_id) REFERENCES m_position(position_id)
);

CREATE TABLE public.r_attendance (
	attendance_id uuid NOT NULL,
	user_id uuid NOT NULL,
	start_time time(0) NULL,
	end_time time(0) NULL,
	longitude varchar NULL,
	latitude varchar NULL,
	country varchar NULL,
	city varchar NULL,
	created_date timestamp(0) NULL,
	CONSTRAINT r_attendance_pk PRIMARY KEY (attendance_id)
);

ALTER TABLE public.r_attendance ADD CONSTRAINT r_attendance_fk FOREIGN KEY (user_id) REFERENCES m_user(user_id);

---------------------------------------------------------------------------
