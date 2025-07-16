CREATE TABLE customer (
    cust_id INT PRIMARY KEY,
    cust_name VARCHAR(255),
    cust_city VARCHAR(255)
);

CREATE TABLE subject (
    id BIGINT PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE user (
    username VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255),
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    password VARCHAR(255),
    role VARCHAR(255)
);

CREATE TABLE student (
    id BIGINT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
);

CREATE TABLE attendance_record (
    id VARCHAR(255) PRIMARY KEY,
    date VARCHAR(255),
    time VARCHAR(255),
    number_of_students INT,
    subject_id BIGINT,
    faculty VARCHAR(255),
    FOREIGN KEY (subject_id) REFERENCES subject(id)
);

CREATE TABLE attendance_students (
    attendance_record_id VARCHAR(255),
    student_id BIGINT,
    PRIMARY KEY (attendance_record_id, student_id),
    FOREIGN KEY (attendance_record_id) REFERENCES attendance_record(id),
    FOREIGN KEY (student_id) REFERENCES student(id)
);
