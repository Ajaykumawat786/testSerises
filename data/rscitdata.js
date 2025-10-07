const rscitdata = [
    {
        question: "1. Excel kya hai?",
        opction: ["Database Software", "Spreadsheet Software", "Presentation Software", "Word Processor"],
        answer: "Spreadsheet Software"
    },
    {
        question: "2. Excel kis company ka software hai?",
        opction: ["Google", "Microsoft", "Apple", "IBM"],
        answer: "Microsoft"
    },
    {
        question: "3. Excel file ka extension kya hota hai?",
        opction: [".xls", ".xlsx", ".docx", ".txt"],
        answer: ".xlsx"
    },
    {
        question: "4. Excel me ek cell kis cheez ka combination hota hai?",
        opction: ["Row aur Column", "Page aur Sheet", "Line aur Box", "None"],
        answer: "Row aur Column"
    },
    {
        question: "5. Formula kis symbol se start hota hai?",
        opction: ["+", "=", "-", ":"],
        answer: "="
    },
    {
        question: "6. Excel me data ko arrange karne ke liye kya use hota hai?",
        opction: ["Sort", "Filter", "Sum", "Count"],
        answer: "Sort"
    },
    {
        question: "7. Excel me AutoSum ka shortcut kya hai?",
        opction: ["Alt + =", "Ctrl + S", "Ctrl + A", "Alt + F1"],
        answer: "Alt + ="
    },
    {
        question: "8. Excel me current date dikhane ka function?",
        opction: ["=DATE()", "=TODAY()", "=NOW()", "=TIME()"],
        answer: "=TODAY()"
    },
    {
        question: "9. Excel me current time dikhane ka function?",
        opction: ["=TIME()", "=NOW()", "=TODAY()", "=DATE()"],
        answer: "=NOW()"
    },
    {
        question: "10. Excel me sabse bada number nikalne ka formula?",
        opction: ["=MAX()", "=MIN()", "=SUM()", "=LARGE()"],
        answer: "=MAX()"
    },
    {
        question: "11. Excel me sabse chhota number nikalne ka formula?",
        opction: ["=MIN()", "=MAX()", "=SUM()", "=AVERAGE()"],
        answer: "=MIN()"
    },
    {
        question: "12. Excel me Average nikalne ka formula?",
        opction: ["=AVERAGE()", "=MEAN()", "=AVG()", "=SUM()/COUNT()"],
        answer: "=AVERAGE()"
    },
    {
        question: "13. Excel me Count function kya karta hai?",
        opction: ["Text count karta hai", "Number cells count karta hai", "Rows count karta hai", "Columns count karta hai"],
        answer: "Number cells count karta hai"
    },
    {
        question: "14. Excel me text count karne ke liye function?",
        opction: ["=COUNT()", "=COUNTA()", "=COUNTIF()", "=TEXTCOUNT()"],
        answer: "=COUNTA()"
    },
    {
        question: "15. Excel me ek workbook me kya hota hai?",
        opction: ["Ek sheet", "Kai sheets", "Sirf ek page", "Koi sheet nahi"],
        answer: "Kai sheets"
    },
    {
        question: "16. Excel me ek row kya hoti hai?",
        opction: ["Vertical line", "Horizontal line", "Diagonal line", "None"],
        answer: "Horizontal line"
    },
    {
        question: "17. Excel me ek column kya hota hai?",
        opction: ["Horizontal line", "Vertical line", "Cross line", "Box"],
        answer: "Vertical line"
    },
    {
        question: "18. Excel me cell address kis form me hota hai?",
        opction: ["RowColumn", "ColumnRow", "PageSheet", "SheetPage"],
        answer: "ColumnRow"
    },
    {
        question: "19. Excel me A1 kya hota hai?",
        opction: ["Row name", "Cell address", "Column name", "File name"],
        answer: "Cell address"
    },
    {
        question: "20. Excel me chart banane ke liye kya use hota hai?",
        opction: ["Insert tab", "Home tab", "View tab", "Data tab"],
        answer: "Insert tab"
    },
    {
        question: "21. Excel me ribbon kya hota hai?",
        opction: ["Menu bar", "Toolbar", "Status bar", "Formula bar"],
        answer: "Toolbar"
    },
    {
        question: "22. Excel me formula bar ka use kya hai?",
        opction: ["Chart banana", "Formula likhna", "Page setup", "Zoom karna"],
        answer: "Formula likhna"
    },
    {
        question: "23. Excel me cell me data enter karne ke baad enter dabane par cursor kaha jata hai?",
        opction: ["Upar", "Niche", "Left", "Right"],
        answer: "Niche"
    },
    {
        question: "24. Excel me worksheet delete karne ke liye kya karte hain?",
        opction: ["Right click → Delete", "Ctrl + D", "Alt + Del", "Home → Clear"],
        answer: "Right click → Delete"
    },
    {
        question: "25. Excel me column add karne ke liye?",
        opction: ["Insert → Column", "Home → Paste", "Data → Add", "Page Layout → Insert"],
        answer: "Insert → Column"
    },
    {
        question: "26. Excel me column delete karne ke liye?",
        opction: ["Delete → Column", "Home → Clear", "Insert → Remove", "Right click → Delete"],
        answer: "Right click → Delete"
    },
    {
        question: "27. Excel me data ko filter karne ke liye kya use hota hai?",
        opction: ["Home tab", "Data tab", "Insert tab", "Review tab"],
        answer: "Data tab"
    },
    {
        question: "28. Excel me comments kis tab me milte hain?",
        opction: ["Home", "Insert", "Review", "Page Layout"],
        answer: "Review"
    },
    {
        question: "29. Excel me merge and center ka use kya karta hai?",
        opction: ["Cell combine karta hai", "Text bold karta hai", "Color change karta hai", "Zoom karta hai"],
        answer: "Cell combine karta hai"
    },
    {
        question: "30. Excel me chart title kis tab se add hota hai?",
        opction: ["Layout tab", "Insert tab", "Home tab", "Review tab"],
        answer: "Layout tab"
    },
    {
        question: "31. Excel me undo ka shortcut kya hai?",
        opction: ["Ctrl + Z", "Ctrl + Y", "Ctrl + X", "Ctrl + C"],
        answer: "Ctrl + Z"
    },
    {
        question: "32. Excel me redo ka shortcut kya hai?",
        opction: ["Ctrl + Z", "Ctrl + Y", "Ctrl + R", "Ctrl + E"],
        answer: "Ctrl + Y"
    },
    {
        question: "33. Excel me copy ka shortcut kya hai?",
        opction: ["Ctrl + C", "Ctrl + X", "Ctrl + V", "Ctrl + S"],
        answer: "Ctrl + C"
    },
    {
        question: "34. Excel me paste ka shortcut kya hai?",
        opction: ["Ctrl + C", "Ctrl + X", "Ctrl + V", "Ctrl + A"],
        answer: "Ctrl + V"
    },
    {
        question: "35. Excel me cut ka shortcut kya hai?",
        opction: ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + D"],
        answer: "Ctrl + X"
    },
    {
        question: "36. Excel me Save karne ka shortcut kya hai?",
        opction: ["Ctrl + P", "Ctrl + S", "Ctrl + O", "Ctrl + V"],
        answer: "Ctrl + S"
    },
    {
        question: "37. Excel me print karne ka shortcut kya hai?",
        opction: ["Ctrl + P", "Ctrl + S", "Ctrl + F", "Ctrl + O"],
        answer: "Ctrl + P"
    },
    {
        question: "38. Excel me pura worksheet select karne ka shortcut kya hai?",
        opction: ["Ctrl + A", "Ctrl + W", "Ctrl + S", "Ctrl + Q"],
        answer: "Ctrl + A"
    },
    {
        question: "39. Excel me find karne ka shortcut kya hai?",
        opction: ["Ctrl + F", "Ctrl + H", "Ctrl + S", "Ctrl + Q"],
        answer: "Ctrl + F"
    },
    {
        question: "40. Excel me replace karne ka shortcut kya hai?",
        opction: ["Ctrl + R", "Ctrl + F", "Ctrl + H", "Ctrl + E"],
        answer: "Ctrl + H"
    },
    {
        question: "41. Excel me gridlines kis tab se on/off hoti hain?",
        opction: ["View tab", "Insert tab", "Data tab", "Home tab"],
        answer: "View tab"
    },
    {
        question: "42. Excel me zoom control kaha hota hai?",
        opction: ["Status bar", "Title bar", "Formula bar", "Ribbon"],
        answer: "Status bar"
    },
    {
        question: "43. Excel me chart kis purpose ke liye use hota hai?",
        opction: ["Data dikhane ke liye", "File rename karne ke liye", "Text likhne ke liye", "Font badalne ke liye"],
        answer: "Data dikhane ke liye"
    },
    {
        question: "44. Excel me status bar kya dikhata hai?",
        opction: ["Current mode", "Cell address", "Formula", "Chart"],
        answer: "Current mode"
    },
    {
        question: "45. Excel me freeze panes ka use kya karta hai?",
        opction: ["Row/Column lock karta hai", "Color change karta hai", "Data delete karta hai", "Chart banata hai"],
        answer: "Row/Column lock karta hai"
    },
    {
        question: "46. Excel me conditional formatting kis tab me hoti hai?",
        opction: ["Home", "Data", "Insert", "Review"],
        answer: "Home"
    },
    {
        question: "47. Excel me alignment tools kaha milte hain?",
        opction: ["Home tab", "Insert tab", "Data tab", "View tab"],
        answer: "Home tab"
    },
    {
        question: "48. Excel me percentage format lagane ka shortcut kya hai?",
        opction: ["Ctrl + Shift + %", "Ctrl + P", "Ctrl + %", "Alt + %"],
        answer: "Ctrl + Shift + %"
    },
    {
        question: "49. Excel me border lagane ka shortcut kya hai?",
        opction: ["Ctrl + Shift + &", "Ctrl + B", "Ctrl + Shift + B", "Ctrl + Shift + C"],
        answer: "Ctrl + Shift + &"
    },
    {
        question: "50. Excel me spelling check karne ka shortcut kya hai?",
        opction: ["F7", "Ctrl + S", "Alt + F7", "Ctrl + F"],
        answer: "F7"
    }
];


