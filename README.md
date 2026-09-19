# Next Icons (Premium Flow Style) 🎨

ชุดไอคอนพรีเมียมสไตล์ **Flow Icons** สีสันสดใส ชัดเจน สวยงาม รองรับทั้ง **VS Code**, **Cursor** และ **Google Antigravity IDE**

---

## 🚀 วิธีติดตั้งสำหรับเพื่อนๆ (Installation Guide)

### 📥 วิธีที่ 1: ติดตั้งผ่านเมนู Extensions (ง่ายที่สุด ⭐)

1. ดาวน์โหลดไฟล์ [next-icons-0.6.0.vsix](https://github.com/ynmio55/icon-vscon/raw/premium-icons-v0.3/next-icons-0.6.0.vsix) มาไว้ที่เครื่อง
2. เปิดโปรแกรม **VS Code / Antigravity / Cursor**
3. ไปที่แท็บ **Extensions** (กดคีย์ลัด `Ctrl + Shift + X` หรือ `Cmd + Shift + X`)
4. คลิกที่ปุ่มจุดสามจุด (`...`) บริเวณมุมขวาบนของแท็บ Extensions
5. เลือกเมนู **"Install from VSIX..."**
6. เลือกไฟล์ `next-icons-0.6.0.vsix` แล้วกดตกลง
7. รอติดตั้งเสร็จสักครู่ จะมีข้อความแจ้งเตือนขึ้นที่มุมขวาล่าง

---

### 💻 วิธีที่ 2: ติดตั้งผ่าน Terminal (บรรทัดเดียวเสร็จ)

เปิด Terminal ในโฟลเดอร์ที่มีไฟล์ `.vsix` แล้วรัน:

```bash
# สำหรับ VS Code
code --install-extension next-icons-0.6.0.vsix

# หรือสำหรับ Cursor
cursor --install-extension next-icons-0.6.0.vsix
```

---

## 🎯 วิธีเปิดใช้งาน (How to Activate)

1. กดคีย์ลัด **`Ctrl + Shift + P`** (หรือ `Cmd + Shift + P` บน Mac)
2. พิมพ์ค้นหา:
   ```text
   Preferences: File Icon Theme
   ```
3. กด **Enter** แล้วคลิกเลือก **Next Icons (Premium)**
4. *(ทางเลือก)* หากไอคอนยังไม่เปลี่ยนทันที ให้กด `Ctrl + Shift + P` แล้วพิมพ์ `Developer: Reload Window` หนึ่งรอบ

---

## 🛠️ สำหรับนักพัฒนา (How to Package)

หากต้องการแก้ไขไอคอนหรือบิลด์เวอร์ชันใหม่:

```bash
# ติดตั้ง dependencies (ถ้าจำเป็น)
npm install

# แพ็กเกจเป็นไฟล์ .vsix
npm run package
```
ไฟล์ `.vsix` เวอร์ชันใหม่จะถูกสร้างขึ้นมาในโฟลเดอร์โปรเจกต์ทันที พร้อมส่งต่อให้เพื่อนใช้งานได้เลย!
