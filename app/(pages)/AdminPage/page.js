'use client';

import FileInput from '@shared/components/UI/FileInput/FileInput';
import Button from '@shared/components/UI/Button/Button';
import SubText from '@shared/components/UI/SubText/SubText';

import excelStore from '@shared/store/excelStore';

export default function () {
  const { uploadExcel } = excelStore();

  const onSubmit = async (event) => {
    event.preventDefault();
    const file = event.target.elements.excelFile.files[0];

    if (!file) {
      console.log('Пожалуйста, выберите файл');
      return;
    }

    // Валидация на клиенте
    if (!file.name.endsWith('.xlsx') && !file.name.endsWith('.xls')) {
      console.error('Только файлы .xlsx или .xls');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      console.error('Файл не должен превышать 5 МБ');
      return;
    }

    try {
      const res = await uploadExcel(file);
      console.log(res.message);
    } catch (err) {
      console.log('Ошибка загрузки: ' + err.message);
    }
  };

  return (
    <div className="p-6 mt-2 max-w-full sm:max-w-lg mx-auto">
      <form id="uploadForm" className="w-full" onSubmit={onSubmit}>
        <FileInput
          id="excelFile"
          name="excelFile"
          type="file"
          required={true}
          accept=".xlsx, .xls"
        >
          Добавьте файл
        </FileInput>
        <SubText className="mt-2 font-light text-sm">
          xlsx, xls (макс. 3MB)
        </SubText>
        <Button
          type="submit"
          className="text-sm mt-4 text-white"
          withGradient={true}
        >
          Загрузить
        </Button>
      </form>
    </div>
  );
}
