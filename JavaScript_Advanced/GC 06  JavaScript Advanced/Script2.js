// Define an object containing countries, their capitals, and flag images
const countries = {
    "Afghanistan": { capital: "Kabul", flag: "https://flagcdn.com/af.svg" },
    "Armenia": { capital: "Yerevan", flag: "https://flagcdn.com/am.svg" },
    "Azerbaijan": { capital: "Baku", flag: "https://flagcdn.com/az.svg" },
    "Bahrain": { capital: "Manama", flag: "https://flagcdn.com/bh.svg" },
    "Bangladesh": { capital: "Dhaka", flag: "https://flagcdn.com/bd.svg" },
    "Bhutan": { capital: "Thimphu", flag: "https://flagcdn.com/bt.svg" },
    "Brunei": { capital: "Bandar Seri Begawan", flag: "https://flagcdn.com/bn.svg" },
    "Cambodia": { capital: "Phnom Penh", flag: "https://flagcdn.com/kh.svg" },
    "China": { capital: "Beijing", flag: "https://flagcdn.com/cn.svg" },
    "Georgia": { capital: "Tbilisi", flag: "https://flagcdn.com/ge.svg" },
    "India": { capital: "New Delhi", flag: "https://flagcdn.com/in.svg" },
    "Indonesia": { capital: "Jakarta", flag: "https://flagcdn.com/id.svg" },
    "Iran": { capital: "Tehran", flag: "https://flagcdn.com/ir.svg" },
    "Iraq": { capital: "Baghdad", flag: "https://flagcdn.com/iq.svg" },
    "Israel": { capital: "Jerusalem", flag: "https://flagcdn.com/il.svg" },
    "Japan": { capital: "Tokyo", flag: "https://flagcdn.com/jp.svg" },
    "Jordan": { capital: "Amman", flag: "https://flagcdn.com/jo.svg" },
    "Kazakhstan": { capital: "Nur-Sultan", flag: "https://flagcdn.com/kz.svg" },
    "Kuwait": { capital: "Kuwait City", flag: "https://flagcdn.com/kw.svg" },
    "Kyrgyzstan": { capital: "Bishkek", flag: "https://flagcdn.com/kg.svg" },
    "Laos": { capital: "Vientiane", flag: "https://flagcdn.com/la.svg" },
    "Lebanon": { capital: "Beirut", flag: "https://flagcdn.com/lb.svg" },
    "Malaysia": { capital: "Kuala Lumpur", flag: "https://flagcdn.com/my.svg" },
    "Maldives": { capital: "Malé", flag: "https://flagcdn.com/mv.svg" },
    "Mongolia": { capital: "Ulaanbaatar", flag: "https://flagcdn.com/mn.svg" },
    "Myanmar": { capital: "Naypyidaw", flag: "https://flagcdn.com/mm.svg" },
    "Nepal": { capital: "Kathmandu", flag: "https://flagcdn.com/np.svg" },
    "North Korea": { capital: "Pyongyang", flag: "https://flagcdn.com/kp.svg" },
    "Oman": { capital: "Muscat", flag: "https://flagcdn.com/om.svg" },
    "Pakistan": { capital: "Islamabad", flag: "https://flagcdn.com/pk.svg" },
    "Palestine": { capital: "Ramallah", flag: "https://flagcdn.com/ps.svg" },
    "Philippines": { capital: "Manila", flag: "https://flagcdn.com/ph.svg" },
    "Qatar": { capital: "Doha", flag: "https://flagcdn.com/qa.svg" },
    "Russia": { capital: "Moscow", flag: "https://flagcdn.com/ru.svg" },
    "Saudi Arabia": { capital: "Riyadh", flag: "https://flagcdn.com/sa.svg" },
    "Singapore": { capital: "Singapore", flag: "https://flagcdn.com/sg.svg" },
    "South Korea": { capital: "Seoul", flag: "https://flagcdn.com/kr.svg" },
    "Sri Lanka": { capital: "Sri Jayawardenepura Kotte", flag: "https://flagcdn.com/lk.svg" },
    "Syria": { capital: "Damascus", flag: "https://flagcdn.com/sy.svg" },
    "Taiwan": { capital: "Taipei", flag: "https://flagcdn.com/tw.svg" },
    "Tajikistan": { capital: "Dushanbe", flag: "https://flagcdn.com/tj.svg" },
    "Thailand": { capital: "Bangkok", flag: "https://flagcdn.com/th.svg" },
    "Turkey": { capital: "Ankara", flag: "https://flagcdn.com/tr.svg" },
    "Turkmenistan": { capital: "Ashgabat", flag: "https://flagcdn.com/tm.svg" },
    "United Arab Emirates": { capital: "Abu Dhabi", flag: "https://flagcdn.com/ae.svg" },
    "Uzbekistan": { capital: "Tashkent", flag: "https://flagcdn.com/uz.svg" },
    "Vietnam": { capital: "Hanoi", flag: "https://flagcdn.com/vn.svg" },
    "Yemen": { capital: "Sana'a", flag: "https://flagcdn.com/ye.svg" }
};

// Get the button and result div from the DOM
const submitBtn = document.getElementById("submitBtn");
const resultDiv = document.getElementById("result");

// Add event listener for the button click
submitBtn.addEventListener("click", function () {
    // Get the value from the input field and trim any whitespace
    const country = document.getElementById("countryInput").value.trim();

    // Check if the country exists in the countries object
    if (countries[country]) {
        // Get the capital and flag from the countries object
        const capital = countries[country].capital;
        const flag = countries[country].flag;

        // Display the capital and flag in the result div
        resultDiv.innerHTML = `<h2>Capital: ${capital}</h2><img src="${flag}" alt="${country} Flag" width="100">`;
    } else {
        // Alert if the country is not found
        alert("Country not found in Asia. Please enter a valid Asian country.");
    }
});
