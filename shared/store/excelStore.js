import { create } from 'zustand';

const useExcelStore = create((set) => ({
//   excelData: [],
//   setExcelData: (data) => set({ excelData: data }),
  uploadExcel: async (formData) => {
    const response = await fetch('/api/excel', {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) {
      throw new Error('Ошибка загрузки на сервер');
    }
    return await response.json();
  },
}));

export default useExcelStore;