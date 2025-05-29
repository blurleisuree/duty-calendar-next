import * as XLSX from 'xlsx';
// import chrono from 'chrono-node';

export async function parseExcel(file) {
  const arrayBuffer = await file.arrayBuffer();
  const workbook = XLSX.read(arrayBuffer, { type: 'array' });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const rawData = XLSX.utils.sheet_to_json(sheet, { defval: '' });

  for (const row of rawData) {
    console.log(row)
  }

  // const parsedData = [];
  // for (const row of rawData) {
  //   // Валидация обязательных полей
  //   if (!row['Категория'] || !row['Организация'] || !row['ФИО'] || !row['Дата']) {
  //     continue; // Пропускаем строки с пустыми обязательными полями
  //   }

  //   // Парсинг даты
  //   let shiftDate = chrono.parseDate(row['Дата']);
  //   if (!shiftDate) {
  //     continue; // Пропускаем строки с некорректной датой
  //   }
  //   shiftDate = new Date(shiftDate.setHours(0, 0, 0, 0));

  //   // Парсинг времени
  //   let startTime = row['Время с:'] ? chrono.parseDate(`2025-01-01 ${row['Время с:']}`) : null;
  //   let endTime = row['Время по:'] ? chrono.parseDate(`2025-01-01 ${row['Время по:']}`) : null;

  //   // Парсинг телефонов
  //   const phones = row['Телефон']
  //     .split(',')
  //     .map(phone => phone.trim())
  //     .filter(phone => phone && /^\+?[\d\s-]+$/.test(phone));

  //   parsedData.push({
  //     category: row['Категория'].trim(),
  //     subcategory: row['Подкатегория']?.trim() || null,
  //     organization: row['Организация'].trim(),
  //     fullName: row['ФИО'].trim(),
  //     position: row['Должность']?.trim() || '',
  //     phones,
  //     shiftDate,
  //     startTime,
  //     endTime,
  //   });
  // }

  return parsedData;
}