
document.addEventListener("DOMContentLoaded", function () {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  if (userData) {
    document.getElementById("displayName").innerText = userData.name;
    document.getElementById("displayPhone").innerText = userData.phone;
  }

  document.getElementById("downloadBtn").addEventListener("click", () => {
    window.print();
  });

  function repeatedFn() {
    function getRepeatedNumbers(phone) {
      const numberCount = {};
      for (let digit of phone) {
        if (digit >= "0" && digit <= "9") {
          numberCount[digit] = (numberCount[digit] || 0) + 1;
        }
      }
      // Filter for numbers that appear three or more times
      return Object.entries(numberCount).filter(([num, count]) => count >= 3);
    }

    function populateRemedies(repeatedNumbers) {
      const remediesDiv = document.getElementById("repeatedNumbersRemedies");
      remediesDiv.innerHTML = "";

      const remediesData = {
        1: {
          healthIssues: ["Acidity", "Bone problems", "Headaches"],
          consequences: ["Insults", "Fights with father"],
          diseases: ["Bone problems", "Headache", "Acidity"],
          solution: [
            "Recite Vishnu Sahasranama 1008 times.",
            "Chant 'Om Hram Hreem Hroum Sah Suryaya Namaha' 1 lakh times.",
          ],
        },
        2: {
          healthIssues: ["Mental tension", "Depression", "Excessive expenses"],
          diseases: [
            "Cold",
            "Depression",
            "Tension",
            "Mental distress",
            "Asthma",
            "Sinus issues",
          ],
          solution: [
            "Perform the Rudra Abhishek path.",
            "Chant 'Maha Mrityunjaya Mantra' 1 lakh times: 'Om Tryambakam Yajamahe Sugandhim Pushtivardhanam, Urvarukamiva Bandhanan Mrityor Mukshiya Maamritat'",
            "Chant 'Om Shram Shreem Shraum Sah Chandramase Namaha' 1 lakh times.",
          ],
        },
        3: {
          healthIssues: [
            "General health problems",
            "Liver problems",
            "Digestion problems",
          ],
          diseases: [
            "Diabetes",
            "Liver problems",
            "Asthma",
            "Digestion issues",
            "Depression",
          ],
          solution: [
            "Recite Vishnu Sahasranama 1 lakh times.",
            "Chant 'Om Gram Greem Groum Sah Gurave Namaha' 1 lakh times.",
          ],
        },
        4: {
          healthIssues: [
            "Problems in relationships",
            "Expenses",
            "Diseases",
            "Sleep issues",
            "Bad relations with in-laws",
          ],
          solution: [
            "Chant Bhairav Gayatri Mantra 1 lakh times: 'Om Kaalakaalaya Vidmahe Athithaya Dhimahi Tanno Kaal Bhairava Prachodayat'",
            "Perform the Rudra Abhishek path 501 times.",
            "Chant 'Om Bhram Bhreem Bhroum Sah Rahave Namaha' 1 lakh times.",
          ],
        },
        5: {
          healthIssues: [
            "Problems with opportunities",
            "Issues with customers",
            "Digestion problems",
          ],
          solution: [
            "Recite Vishnu Sahasranama 108 times.",
            "Chant Vishnu Gayatri Mantra 1 lakh times: 'Om Narayanaya Vidmahe Vasudevaya Dhimahi Tanno Vishnu Prachodayat'",
            "Chant 'Om Bram Breem Broum Sah Rahave Namaha' 1 lakh times.",
          ],
        },
        6: {
          healthIssues: [
            "Problems in marital life",
            "Marriage problems",
            "Financial problems",
            "Note: In females, financial loss may lead to health problems",
          ],
          solution: [
            "Chant Durga Gayatri Mantra 1 lakh times: 'Om Katyayanaya Vidmahe Kanyakumari Dhimahi Tanno Durgi Prachodayat'",
            "Recite Durga Sahasranama.",
            "Chant 'Om Dram Dreem Droum Sah Shukraya Namaha' 1 lakh times.",
          ],
        },
        7: {
          healthIssues: [
            "Money problems",
            "Marriage problems",
            "Obstacles in life",
          ],
          solution: [
            "Chant Ganesh Gayatri Mantra 1 lakh times: 'Om Ekadantaya Vidmahe Vakratundaya Dhimahi Tanno Danti Prachodayat'",
            "Recite Ganesh Sahasranama 1 lakh times.",
            "Chant 'Om Stram Streem Stroum Sah Ketave Namaha' 1 lakh times.",
          ],
        },
        8: {
          healthIssues: [
            "Professional problems",
            "Financial issues",
            "Money loss",
            "Conflicts with staff",
            "Additional Issues: Laziness, delays in work",
          ],
          solution: [
            "Chant Shani Mantra 1 lakh times: 'Om Pram Preem Praum Sah Shanishcharaya Namaha'",
            "Chant Maha Mrityunjaya Mantra 1 lakh times: 'Om Tryambakam Yajamahe Sugandhim Pushtivardhanam, Urvarukamiva Bandhanan Mrityor Mukshiya Maamritat'",
          ],
        },
        9: {
          healthIssues: [
            "Muscle problems",
            "Accidents",
            "Surgeries",
            "Fights with others",
          ],
          solution: [
            "Recite Sundara Kand 1 lakh times.",
            "Chant Mangal Beej Mantra 1 lakh times: 'Om Kram Kreem Kroum Sah Bhaumaya Namaha'",
          ],
        },
        0: {
          implications: [
            "All efforts will be in vain; no success after many efforts",
          ],
        },
      };

      repeatedNumbers.forEach(([num]) => {
        if (num >= 0) {
          const data = remediesData[num] || {};
          const entry = document.createElement("div");
          entry.classList.add("rounded-lg", "p-");

          entry.innerHTML = `
              <h3 class="font-semibold text-md">Number ${num} Insights:</h3>
              <ul class="list-disc list-inside">
                ${
                  data.healthIssues
                    ? `<li><strong>Health Issues:</strong> ${data.healthIssues.join(
                        ", "
                      )}</li>`
                    : ""
                }
                ${
                  data.consequences
                    ? `<li><strong>Potential Consequences:</strong> ${data.consequences.join(
                        ", "
                      )}</li>`
                    : ""
                }
                ${
                  data.diseases
                    ? `<li><strong>Possible Diseases:</strong> ${data.diseases.join(
                        ", "
                      )}</li>`
                    : ""
                }
                ${
                  data.implications
                    ? `<li><strong>Implications:</strong> ${data.implications.join(
                        ", "
                      )}</li>`
                    : ""
                }
                ${
                  data.solution
                    ? `<li><strong>Remedies:</strong> ${data.solution.join(
                        "<br>"
                      )}</li>`
                    : ""
                }
              </ul>
            `;

          remediesDiv.appendChild(entry);
        }
      });
    }

    if (userData) {
      const repeatedNumbers = getRepeatedNumbers(userData.phone);
      if (repeatedNumbers.length === 0) {
        const page6 = document.getElementById("page6");
        page6.style.display = "none";
        console.log(repeatedNumbers);
      }

      populateRemedies(repeatedNumbers);
    }
  }

  function repeatedHindiFn() {
    function getRepeatedNumbers(phone) {
      const numberCount = {};

      for (let digit of phone) {
        if (digit >= "0" && digit <= "9") {
          numberCount[digit] = (numberCount[digit] || 0) + 1;
        }
      }

      return Object.entries(numberCount).filter(([num, count]) => count >= 3);
    }

    function populateRemedies(repeatedNumbers) {
      const remediesDiv = document.getElementById("repeatedNumbersRemediesH");
      remediesDiv.innerHTML = "";

      const remediesData = {
        1: {
          healthIssues: ["अम्लता", "हड्डियों की समस्याएँ", "सिरदर्द"],
          consequences: ["अपमान", "पिता के साथ झगड़े"],
          diseases: ["हड्डियों की समस्याएँ", "सिरदर्द", "अम्लता"],
          solution: [
            "विष्णु सहस्रनाम का 1008 बार पाठ करें।",
            "‘ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः’ का 1 लाख बार जाप करें।",
          ],
        },
        2: {
          healthIssues: ["मानसिक तनाव", "अवसाद", "अत्यधिक खर्च"],
          diseases: [
            "जुकाम",
            "अवसाद",
            "तनाव",
            "मानसिक कठिनाई",
            "अस्थमा",
            "साइनस संबंधी समस्याएँ",
          ],
          solution: [
            "रुद्राभिषेक का पाठ करें।",
            "‘महामृत्युंजय मंत्र’ का 1 लाख बार जाप करें: ‘ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्, उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात्’",
            "‘ॐ श्रां श्रीं श्रौं सः चंद्रमसे नमः’ का 1 लाख बार जाप करें।",
          ],
        },
        3: {
          healthIssues: [
            "सामान्य स्वास्थ्य समस्याएँ",
            "जिगर की समस्याएँ",
            "पाचन समस्याएँ",
          ],
          diseases: [
            "मधुमेह",
            "जिगर की समस्याएँ",
            "अस्थमा",
            "पाचन समस्याएँ",
            "अवसाद",
          ],
          solution: [
            "विष्णु सहस्रनाम का 1 लाख बार पाठ करें।",
            "‘ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः’ का 1 लाख बार जाप करें।",
          ],
        },
        4: {
          healthIssues: [
            "रिश्तों में समस्याएँ",
            "खर्च",
            "रोग",
            "नींद की समस्याएँ",
            "ससुराल वालों के साथ खराब रिश्ते",
          ],
          solution: [
            "भैरव गायत्री मंत्र का 1 लाख बार जाप करें: ‘ॐ कालकालाय विद्महे अथिताय धीमहि तन्नो काल भैरव प्रचोदयात्’",
            "रुद्राभिषेक का 501 बार पाठ करें।",
            "‘ॐ भ्रां भ्रीं भ्रौं सः राहवे नमः’ का 1 लाख बार जाप करें।",
          ],
        },
        5: {
          healthIssues: [
            "अवसरों में समस्याएँ",
            "ग्राहकों से समस्याएँ",
            "पाचन समस्याएँ",
          ],
          solution: [
            "विष्णु सहस्रनाम का 108 बार पाठ करें।",
            "विष्णु गायत्री मंत्र का 1 लाख बार जाप करें: ‘ॐ नारायणाय विद्महे वासुदेवाय धीमहि तन्नो विष्णुः प्रचोदयात्’",
            "‘ॐ ब्रां ब्रीं ब्रौं सः राहवे नमः’ का 1 लाख बार जाप करें।",
          ],
        },
        6: {
          healthIssues: [
            "वैवाहिक जीवन में समस्याएँ",
            "शादी की समस्याएँ",
            "वित्तीय समस्याएँ",
          ],
          solution: [
            "दुर्गा गायत्री मंत्र का 1 लाख बार जाप करें: ‘ॐ कात्यायनाय विद्महे कन्यकुमारि धीमहि तन्नो दुर्गि प्रचोदयात्’",
            "दुर्गा सहस्रनाम का पाठ करें।",
            "‘ॐ द्रां द्रीं द्रौं सः शुक्राय नमः’ का 1 लाख बार जाप करें।",
          ],
        },
        7: {
          healthIssues: [
            "धन संबंधी समस्याएँ",
            "शादी की समस्याएँ",
            "जीवन में बाधाएँ",
          ],
          solution: [
            "गणेश गायत्री मंत्र का 1 लाख बार जाप करें: ‘ॐ एकदंताय विद्महे वक्रतुंडाय धीमहि तन्नो दंती प्रचोदयात्’",
            "गणेश सहस्रनाम का 1 लाख बार पाठ करें।",
            "‘ॐ स्त्रां स्त्रीं स्त्रौं सः केतवे नमः’ का 1 लाख बार जाप करें।",
          ],
        },
        8: {
          healthIssues: [
            "पेशेवर समस्याएँ",
            "वित्तीय मुद्दे",
            "धन की हानि",
            "कर्मचारियों के साथ संघर्ष",
          ],
          solution: [
            "शनि मंत्र का 1 लाख बार जाप करें: ‘ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः’",
            "महामृत्युंजय मंत्र का 1 लाख बार जाप करें: ‘ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्, उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात्’",
          ],
        },
        9: {
          healthIssues: [
            "मांसपेशियों की समस्याएँ",
            "दुर्घटनाएँ",
            "सर्जरी",
            "दूसरों के साथ झगड़े",
          ],
          solution: [
            "सुंदरकांड का 1 लाख बार पाठ करें।",
            "मंगल बीज मंत्र का 1 लाख बार जाप करें: ‘ॐ क्रां क्रीं क्रौं सः भौमाय नमः’",
          ],
        },
        0: {
          implications: [
            "सभी प्रयास व्यर्थ होंगे; कई प्रयासों के बाद कोई सफलता नहीं मिलेगी",
          ],
          solution: ["समय के अनुसार व्यक्तिगत उपाय अपनाएँ।"],
        },
      };

      repeatedNumbers.forEach(([num]) => {
        if (num >= 0) {
          const data = remediesData[num] || {};
          const entry = document.createElement("div");
          entry.classList.add("rounded-lg", "p-4");

          entry.innerHTML = `
              <h3 class="font-semibold text-md">नंबर ${num} की जानकारी:</h3>
              <ul class="list-disc list-inside">
                ${
                  data.healthIssues
                    ? `<li><strong>स्वास्थ्य समस्याएँ:</strong> ${data.healthIssues.join(
                        ", "
                      )}</li>`
                    : ""
                }
                ${
                  data.consequences
                    ? `<li><strong>संभावित परिणाम:</strong> ${data.consequences.join(
                        ", "
                      )}</li>`
                    : ""
                }
                ${
                  data.diseases
                    ? `<li><strong>संभावित रोग:</strong> ${data.diseases.join(
                        ", "
                      )}</li>`
                    : ""
                }
                ${
                  data.implications
                    ? `<li><strong>प्रभाव:</strong> ${data.implications.join(
                        ", "
                      )}</li>`
                    : ""
                }
                ${
                  data.solution
                    ? `<li><strong>उपाय:</strong> ${data.solution.join(
                        "<br>"
                      )}</li>`
                    : ""
                }
              </ul>
            `;

          remediesDiv.appendChild(entry);
        }
      });
    }

    if (userData) {
      const repeatedNumbers = getRepeatedNumbers(userData.phone);

      if (repeatedNumbers.length === 0) {
        const page15 = document.getElementById("page-15");
        page15.style.display = "none";
      }
      populateRemedies(repeatedNumbers);
    }
  }


  repeatedFn();
  repeatedHindiFn();
});