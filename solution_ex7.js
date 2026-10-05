
const records = [
    "BS.nguyen_van_hai-KHOA_TIM_MACH-08:30-PHONG_302",
    "BS.tran_thi_lan-KHOA_NOI_TONG_QUAT-09:00-PHONG_105",
    "BS.le_minh_tuan-KHOA_NGOAI_KHOA-14:00-PHONG_204"
];

for (let i = 0; i < records.length; i++) {
    const data = records[i].split("-");

    let doctor = data[0];
    let specialty = data[1];
    let time = data[2];
    let room = data[3];

    doctor = doctor.replace("BS.", "");
    doctor = doctor.replaceAll("_", " ");
    doctor = doctor.toLowerCase();

    let doctorWords = doctor.split(" ");
    let doctorName = "";

    for (let j = 0; j < doctorWords.length; j++) {
        doctorName += doctorWords[j].slice(0, 1).toUpperCase() + doctorWords[j].slice(1);

        if (j < doctorWords.length - 1) {
            doctorName += " ";
        }
    }

    specialty = specialty.replaceAll("_", " ");
    specialty = specialty.toLowerCase();

    let specialtyWords = specialty.split(" ");
    let specialtyName = "";

    for (let j = 0; j < specialtyWords.length; j++) {
        specialtyName += specialtyWords[j].slice(0, 1).toUpperCase() + specialtyWords[j].slice(1);

        if (j < specialtyWords.length - 1) {
            specialtyName += " ";
        }
    }

    room = room.replace("PHONG_", "Phòng ");

    console.log(`
========================================
      PHÂN CÔNG CA KHÁM
========================================
Bác sĩ      : ${doctorName}
Chuyên khoa : ${specialtyName}
Giờ khám    : ${time}
Phòng khám  : ${room}
========================================
`)
    }