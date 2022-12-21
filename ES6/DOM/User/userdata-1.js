let users = [{ "id": 1, "name": "Derril", "email": "ddeek0@homestead.com", "gender": "Male" },
{ "id": 2, "name": "Guss", "email": "gcockson1@nbcnews.com", "gender": "Male" },
{ "id": 3, "name": "Prescott", "email": "pgiovanitti2@studiopress.com", "gender": "Male" },
{ "id": 4, "name": "Rosana", "email": "rthandi3@usgs.gov", "gender": "Female" },
{ "id": 5, "name": "Brynna", "email": "bturle4@wunderground.com", "gender": "Female" },
{ "id": 6, "name": "Saunder", "email": "sgainor5@woothemes.com", "gender": "Male" },
{ "id": 7, "name": "Leah", "email": "lhawkeridge6@mtv.com", "gender": "Female" },
{ "id": 8, "name": "Eldridge", "email": "eladewig7@gmpg.org", "gender": "Male" },
{ "id": 9, "name": "Ronda", "email": "rvanderbrugge8@nydailynews.com", "gender": "Female" },
{ "id": 10, "name": "Adel", "email": "aoram9@theguardian.com", "gender": "Female" },
{ "id": 11, "name": "Broddy", "email": "bmissona@intel.com", "gender": "Agender" },
{ "id": 12, "name": "Sarene", "email": "shulettb@netscape.com", "gender": "Female" },
{ "id": 13, "name": "Rosco", "email": "rarmitagec@macromedia.com", "gender": "Male" },
{ "id": 14, "name": "Tobey", "email": "tlaurischd@virginia.edu", "gender": "Female" },
{ "id": 15, "name": "Fair", "email": "fmycocke@cdbaby.com", "gender": "Male" },
{ "id": 16, "name": "Verena", "email": "vduttf@techcrunch.com", "gender": "Female" },
{ "id": 17, "name": "Kimberlee", "email": "klavallieg@un.org", "gender": "Female" },
{ "id": 18, "name": "Alexine", "email": "asimonyh@latimes.com", "gender": "Female" },
{ "id": 19, "name": "Jackson", "email": "jkristofi@usgs.gov", "gender": "Male" },
{ "id": 20, "name": "Thia", "email": "tspillmanj@i2i.jp", "gender": "Female" },
{ "id": 21, "name": "Candide", "email": "cmooreedk@weather.com", "gender": "Female" },
{ "id": 22, "name": "Connie", "email": "chablotl@barnesandnoble.com", "gender": "Female" },
{ "id": 23, "name": "Olga", "email": "osammonm@simplemachines.org", "gender": "Female" },
{ "id": 24, "name": "Zane", "email": "zbateyn@blinklist.com", "gender": "Male" },
{ "id": 25, "name": "Marietta", "email": "mbehno@auda.org.au", "gender": "Bigender" },
{ "id": 26, "name": "Guilbert", "email": "gtaggettp@ucoz.ru", "gender": "Male" },
{ "id": 27, "name": "Hart", "email": "hcrawleyq@answers.com", "gender": "Male" },
{ "id": 28, "name": "Antin", "email": "abraamr@nbcnews.com", "gender": "Male" },
{ "id": 29, "name": "Etan", "email": "eifills@ox.ac.uk", "gender": "Male" },
{ "id": 30, "name": "Roda", "email": "rwestreyt@state.gov", "gender": "Female" },
{ "id": 31, "name": "Hermie", "email": "hreederu@craigslist.org", "gender": "Male" },
{ "id": 32, "name": "Herbie", "email": "hmccarronv@1und1.de", "gender": "Male" },
{ "id": 33, "name": "Mara", "email": "mscottw@hc360.com", "gender": "Female" },
{ "id": 34, "name": "Caria", "email": "claythamx@de.vu", "gender": "Female" },
{ "id": 35, "name": "Hale", "email": "htemplary@walmart.com", "gender": "Male" },
{ "id": 36, "name": "Korry", "email": "kbeernaertz@si.edu", "gender": "Female" },
{ "id": 37, "name": "Elicia", "email": "ebrennan10@bloglovin.com", "gender": "Female" },
{ "id": 38, "name": "Gerardo", "email": "gmeriton11@themeforest.net", "gender": "Male" },
{ "id": 39, "name": "Regen", "email": "rspofforth12@paypal.com", "gender": "Male" },
{ "id": 40, "name": "Vaclav", "email": "vflanagan13@earthlink.net", "gender": "Male" },
{ "id": 41, "name": "Fabio", "email": "fbaudy14@senate.gov", "gender": "Male" },
{ "id": 42, "name": "Linnet", "email": "llorenzetti15@nymag.com", "gender": "Female" },
{ "id": 43, "name": "Anjanette", "email": "acastille16@addthis.com", "gender": "Female" },
{ "id": 44, "name": "Ibrahim", "email": "idriutti17@blogger.com", "gender": "Genderfluid" },
{ "id": 45, "name": "Zacharie", "email": "zlockery18@blogspot.com", "gender": "Male" },
{ "id": 46, "name": "Valencia", "email": "vdas19@google.ru", "gender": "Genderqueer" },
{ "id": 47, "name": "Gerianna", "email": "gfereday1a@oakley.com", "gender": "Female" },
{ "id": 48, "name": "Reggie", "email": "rroulston1b@booking.com", "gender": "Female" },
{ "id": 49, "name": "Emmit", "email": "ehiggan1c@w3.org", "gender": "Male" },
{ "id": 50, "name": "Ravi", "email": "rlamminam1d@bigcartel.com", "gender": "Male" }]

function displayUsers() {
    let rows = ""
    for (user of users) {
        rows = rows + `<tr>
                             <td>${user.id}</td>
                             <td>${user.name}</td>
                             <td>${user.email}</td>
                             <td>${user.gender}</td>
                        </tr>`
    }

    document.getElementById('tbody_Data').innerHTML = rows
}