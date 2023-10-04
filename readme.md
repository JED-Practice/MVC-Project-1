# News Portal

## Proyekt haqqında

Bu proyektdə, kiçik xəbər portalı hazırlamalıyıq. Portalımızda istifadəçilər xəbərlərə baxa biləcək, kommentlər yaza biləcək, eləcə də xəbərləri başlığa görə axtara biləcək. Həmçinin bir admin panelimiz olmalıdır.

## Əsas özəllikləri

1. **Login/Register:**

   - İstifadəçilərin rahatlığı üçün login və register məntiqi yazın
   - Rollar istifadə edərək admin və ya sadəcə user(oxuyucu) olduğunu müəyyən edin

2. **Xəbərlər Oxuyucu tərəfdən:**

   - Hər xəbər bir kateqoriyaya aid olmalıdır, və eləcə də bir altkateqoriyaya. Məsələn kateqoriya kimi əyləncə, altkateqoriya kimi Video Oyunlar və oxuyucular spesifik kateqoriyalara görə xəbərlər oxuya bilməlidir
   - Oxuyucular, xəbərin ətraflı bölməsinə giriş etdikdə həm də kommentlərini görə bilməlidir eləcə də istəsələr komment yaza bilməlidirlər

3. **Axtarış:**

   - İstifadəçilər xəbər başlıqlarına görə axtarış edə bilməlidirlər.

4. **Oxuyucu Profili:**

   - Oxuyucular istəsələr, profil şəkli əlavə edə bilərlər və ya susmaya görə bir şəkil olmalıdır.
   - İstədikləri zaman məlumatlarını dəyişə bilməlidirlər
   - Öz kommentlərini görə bilməlidirlər

5. **Xəbərlər Admin tərəfdən:**

   - Adminlər hazırda portalda olan kateqoriyaların, altkateqoriyaların silinən və aktiv xəbərlərin sayını görə bilməlidirlər
   - Adminlər xəbərlər üçün kateqoriyalar yarada bilməli və onları idarə edə bilməlidirlər
   - Eləcə də altkateqoriyaları əlavə edə və ya idarə edə bilməlidirlər
   - Adminlər xəbər paylaşa bilməlidirlər, onları idarə etməli və silə bilməlidirlər.
   - Silmək isə iki cür olmalıdır ilk növbədə sadəcə deaktiv olmalı sonra isə tamamilə silinməlidir
   - Adminlər yazılan bütün kommentləri qəbul edə və ya etməyə bilərlər
   - Qəbul edilmiş kommentləri isə ayrıca görə bilməlidirlər

6. **Təhlükəsizlik:**

   - Yuxarıda da qeyd edildiyi kimi rol əsaslı avtorizasiya olmalıdır.
   - Eləcə də qonaq(guest) modu olmalıdır ki, hesabı olmayan oxuyucular xəbər oxuya bilsin lakin komment yaza bilməsin
   - Register-dən sonra istifadəçinin daxil etdiyi mailə təsdiq linki göndərilməlidir təsdiq edildikdən sonra artıq Login mümkün olmalıdır
