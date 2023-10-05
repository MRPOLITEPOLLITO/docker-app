CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    student_name VARCHAR(100) NOT NULL,
    student_age INTEGER NOT NULL,
    student_sex VARCHAR(20) NOT NULL,
    student_career VARCHAR(10) NOT NULL,
    student_ide VARCHAR(10) NOT NULL,
    student_level INTEGER NOT NULL,
    student_t_date DATE NOT NULL DEFAULT CURRENT_DATE,
    student_birth_data VARCHAR(500),
    student_provenance VARCHAR(300),
    student_status VARCHAR(50),
    student_address VARCHAR(500),
    student_email VARCHAR(100),
    student_phone VARCHAR(50)
);