import { NextResponse } from 'next/server';
import { parseExcel } from '@server/excel/parseExcel';
import prisma from '@server/db/prisma';

export async function POST(request) {
  try {
    const file = await request.file();
    return NextResponse.json({ message: 'true' });
    console.log(file);
    // const file = formData.get('file');

    // // Валидация на сервере
    // if (!file) {
    //   return NextResponse.json({ error: 'Файл не предоставлен' }, { status: 400 });
    // }
    // if (!file.name.endsWith('.xlsx') && !file.name.endsWith('.xls')) {
    //   return NextResponse.json({ error: 'Неподдерживаемый формат файла' }, { status: 400 });
    // }
    // if (file.size > 5 * 1024 * 1024) {
    //   return NextResponse.json({ error: 'Файл слишком большой' }, { status: 400 });
    // }

    // // Парсинг и сохранение
    // const data = await parseExcel(file);
    // if (data.length === 0) {
    //   return NextResponse.json({ error: 'Файл пуст' }, { status: 400 });
    // }

    // // Валидация структуры данных
    // for (const row of data) {
    //   if (!row.name || typeof row.value !== 'number') {
    //     return NextResponse.json({ error: 'Некорректная структура данных' }, { status: 400 });
    //   }
    // }

    // // Сохранение в базу данных
    // await prisma.excelData.createMany({ data });
    // return NextResponse.json({ message: 'Данные сохранены', data });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
