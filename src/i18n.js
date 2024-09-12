// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Khai báo các tùy chọn cấu hình
i18n
  .use(HttpApi) // Để tải các tập tin ngôn ngữ từ máy chủ
  .use(LanguageDetector) // Phát hiện ngôn ngữ của người dùng
  .use(initReactI18next) // Cung cấp i18n cho React
  .init({
    fallbackLng: 'en', // Ngôn ngữ mặc định nếu không phát hiện được ngôn ngữ người dùng
    debug: true, // Ghi nhật ký thông tin (chỉ dùng trong môi trường phát triển)
    interpolation: {
      escapeValue: false, // React đã bảo vệ chống lại các tấn công XSS
    },
    backend: {
      // Cấu hình để tải các tập tin ngôn ngữ
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
