# Nowoczesne CV - Tomasz Pielecki (2025)

To interaktywne CV zostało stworzone w oparciu o nowoczesne technologie webowe. Dzięki temu prezentuje się profesjonalnie zarówno na urządzeniach mobilnych, jak i w formie drukowanej.

## Zawartość katalogu

- `index.html` - Główna struktura CV z wszystkimi sekcjami
- `styles.css` - Style odpowiedzialne za wygląd CV
- `scripts.js` - Interaktywne funkcje i animacje
- `README.md` - Ten plik z instrukcjami

## Jak korzystać

1. **Przeglądanie CV**: Po prostu otwórz plik `index.html` w przeglądarce internetowej.

2. **Drukowanie CV**: 
   - Otwórz CV w przeglądarce i wybierz opcję drukowania (Ctrl+P lub Cmd+P)
   - W opcjach drukowania wybierz "Zapisz jako PDF" jeśli potrzebujesz wersji PDF
   - CV automatycznie dostosuje się do formatu drukowanego

3. **Personalizacja CV**:

   ### Zmiana zdjęcia profilowego
   - Umieść swoje zdjęcie w folderze CV i nazwij je `photo.jpg`
   - Otwórz plik `scripts.js` i znajdź linię z `showPhotoPlaceholder: true`
   - Zmień wartość na `false` aby użyć Twojego zdjęcia

   ### Zmiana stanowiska/roli
   - W pliku `scripts.js` zmień wartość `currentRole` na preferowaną, np.:
     - `Frontend Developer`
     - `Backend Developer`
     - `Full-Stack Developer`
     - `Python Developer`

   ### Edycja danych osobowych
   - Otwórz plik `index.html` w edytorze tekstu
   - Znajdź sekcję `contact-info` i dokonaj odpowiednich zmian

   ### Dostosowanie umiejętności
   - W pliku `index.html` możesz zmienić wartości `data-level` dla każdej umiejętności
   - Wartości są w skali 0-100 i odpowiadają za długość pasków umiejętności

   ### Wyłączenie animacji
   - W pliku `scripts.js` zmień `animationsEnabled: true` na `false`

## Wskazówki dla rekruterów

To CV zostało zaprojektowane tak, aby podkreślać umiejętności Full-Stack Developera z naciskiem na:

1. **Frontend**: Vue.js 3, Nuxt 3, HTML5, CSS3/SCSS, JavaScript, SEO
2. **Backend**: Python 3.11, Flask, PHP, Symfony, Smarty
3. **Bazy danych**: MySQL, PostgreSQL, SQLite3, Oracle
4. **Analiza danych**: Pandas, TensorFlow, Scikit-Learn, NeuralProphet

## Projekty

### CryptoVerse
Portal o kryptowalutach dostarczający aktualne wykresy, dane i artykuły. Posiada backend napisany w Pythonie umożliwiający predykcję cen kryptowalut z wykorzystaniem biblioteki NeuralProphet. 

### Snaply
Narzędzie desktopowe i mobilne do tworzenia zrzutów ekranu, służące do wyłapywania różnic i błędów podczas tworzenia stron internetowych lub innych aplikacji. Umożliwia przechwytywanie elementów stron, co pomaga w analizie i odwzorowaniu layoutów.

### Ciesla
Statyczna strona one-page zaprojektowana jako wizytówka dla firmy stolarskiej. Wykorzystuje nowoczesne technologie frontendowe, a minimalistyczny design zapewnia czytelność i funkcjonalność.

### Vue Shop
Nowoczesna platforma eCommerce zbudowana w oparciu o Vue.js 3 i Nuxt 3, wykorzystująca zalety SSR i SSG dla optymalnej wydajności i SEO. Implementacja dynamicznego ładowania treści, meta tagów zgodnych ze standardami Schema.org oraz optymalizacja Core Web Vitals.

## Optymalizacja dla ATS (Applicant Tracking Systems)

CV zostało zoptymalizowane pod kątem systemów ATS dzięki:
- Czystej strukturze HTML
- Odpowiedniemu użyciu nagłówków
- Wyraźnemu wyróżnieniu kluczowych umiejętności
- Możliwości łatwego wygenerowania PDF
- Uwzględnieniu kluczowych słów związanych z SEO, Vue.js i Nuxt 3

---

&copy; 2025 Tomasz Pielecki