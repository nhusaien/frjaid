import 'https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js';
import { getDatabase, set, ref, get, update, onValue } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js';
import { getStorage, ref as _0x7eca33, uploadBytes, getDownloadURL, deleteObject, listAll } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-storage.js';
const auth = getAuth();
const database = getDatabase();
const storage = getStorage();
const login = document.getElementById('login-submit');
if (login) {
  login.addEventListener("click", _0x598bf9 => {
    _0x598bf9.preventDefault();
    const _0x26025f = document.getElementById("login-email").value;
    const _0x35693f = document.getElementById("login-password").value;
    signInWithEmailAndPassword(auth, _0x26025f, _0x35693f).then(_0x98fd6b => {
      const _0x58882b = _0x98fd6b.user;
      const _0x247b55 = new Date();
      const _0x1dce45 = window.innerWidth;
      const _0xe868f3 = window.innerHeight;
      update(ref(database, 'users/' + _0x58882b.uid), {
        'last_login': _0x247b55,
        'screen': _0x1dce45 + '/' + _0xe868f3
      });
      alert("logged in");
      window.location.replace("välja.html");
    })['catch'](_0x5d5334 => {
      alert("Fel Inloggning");
    });
  });
}
onAuthStateChanged(auth, _0x3fc03b => {
  if (_0x3fc03b) {
    console.log("User logged in:", _0x3fc03b.email);
    const _0x28a169 = document.getElementById("lastname-Data");
    const _0x512580 = document.getElementById("name-Data");
    const _0x984690 = document.getElementById('age-Data');
    const _0x4225fa = document.getElementById("fullage-Data");
    const _0xc5c59b = document.getElementById("adminDisplayName");
    const _0x13404d = ref(database, 'users/' + _0x3fc03b.uid);
    get(_0x13404d).then(_0x7aa6aa => {
      const _0x587ce0 = _0x7aa6aa.val();
      if (_0x587ce0) {
        if (_0x28a169) {
          _0x28a169.textContent = '' + _0x587ce0.lastname;
        }
        if (_0x512580) {
          _0x512580.textContent = '' + _0x587ce0.firstname;
        }
        if (_0x984690) {
          _0x984690.textContent = '' + _0x587ce0.age;
        }
        if (_0x4225fa) {
          _0x4225fa.textContent = '' + _0x587ce0.birthcode + _0x587ce0.lastTwoLetters;
        }
        if (_0xc5c59b) {
          _0xc5c59b.textContent = '' + _0x587ce0.username;
        }
        const _0x36eea3 = _0x587ce0.roles && _0x587ce0.roles.includes('Admin');
        const _0x38dd5e = document.getElementById('adminBtn');
        if (_0x36eea3) {
          console.log("You are an Admin!");
          if (_0x38dd5e) {
            _0x38dd5e.style.display = "block";
          }
          const _0x4af62c = getDatabase();
          const _0x1b879c = ref(_0x4af62c, 'users/');
          get(_0x1b879c).then(_0x31c89b => {
            const _0x26f080 = _0x31c89b.val();
            if (_0x26f080 && typeof _0x26f080 === "object") {
              let _0x16b0d3 = 0x0;
              Object.entries(_0x26f080).forEach(([_0x3c5349, _0x13fed5]) => {
                if (_0x13fed5.roles === 'Admin' || _0x13fed5.roles === 'Staff') {
                  const _0x530525 = document.createElement("div");
                  _0x530525.classList.add("userRow");
                  _0x530525.style.backgroundColor = _0x16b0d3 % 0x2 === 0x0 ? "rgb(25, 26, 45)" : "rgb(51, 51, 66)";
                  const _0x57e99b = document.createElement('div');
                  _0x57e99b.classList.add('role');
                  const _0x589661 = document.createElement('p');
                  _0x589661.textContent = _0x13fed5.roles;
                  _0x57e99b.appendChild(_0x589661);
                  const _0x14133d = document.createElement("div");
                  _0x14133d.classList.add("user");
                  const _0xccfb3d = document.createElement('p');
                  _0xccfb3d.textContent = _0x13fed5.username;
                  _0x14133d.appendChild(_0xccfb3d);
                  const _0x240b41 = document.createElement("div");
                  _0x240b41.classList.add('empty');
                  _0x530525.appendChild(_0x57e99b);
                  _0x530525.appendChild(_0x14133d);
                  _0x530525.appendChild(_0x240b41);
                  userList.appendChild(_0x530525);
                  _0x16b0d3++;
                }
              });
            } else {
              console.error("Invalid data structure or no data found.");
            }
          })["catch"](_0x15ff1e => {
            console.error("Error fetching user data:", _0x15ff1e);
          });
          const _0x2b81fc = document.getElementById("signup-submit");
          if (_0x2b81fc) {
            _0x2b81fc.addEventListener("click", _0x1b5173 => {
              _0x1b5173.preventDefault();
              const _0x4f805b = document.getElementById("signup-email").value;
              const _0x590d4c = document.getElementById("signup-password").value;
              createUserWithEmailAndPassword(auth, _0x4f805b, _0x590d4c).then(_0x1825b5 => {
                const _0x17f607 = _0x1825b5.user;
                const _0x8a9fbf = new Date();
                const _0x1a1458 = ['Jan', "Feb", "Mar", "Apr", "May", 'Jun', "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                const _0x2a18d6 = _0x8a9fbf.getFullYear();
                const _0x207711 = _0x1a1458[_0x8a9fbf.getMonth()];
                const _0x445fe3 = _0x8a9fbf.getDate();
                const _0x2922b8 = _0x207711 + " / " + _0x445fe3 + " / " + _0x2a18d6;
                const _0x33e0e8 = _0x587ce0.username + '/' + _0x587ce0.roles;
                set(ref(database, "users/" + _0x17f607.uid), {
                  'email': _0x4f805b,
                  'firstname': "DeufaltName",
                  'lastname': "DefualtLastname",
                  'age': '18',
                  'birthcode': '',
                  'lastTwoLetters': '',
                  'dateCreated': _0x2922b8,
                  'createdBy': _0x33e0e8
                });
                alert("User created successfully");
                _0x2b81fc.innerHTML = "User created";
                setTimeout(function () {
                  _0x2b81fc.innerHTML = "Registrera Användare";
                }, 0xbb8);
              })["catch"](_0x5e74e6 => {
                const _0x505f70 = _0x5e74e6.message;
                console.log(_0x505f70);
                _0x2b81fc.innerText = "Error creating user";
                setTimeout(function () {
                  _0x2b81fc.innerText = "Registrera Användare";
                }, 0xbb8);
              });
            });
          }
          let _0x5b664d = document.querySelector('.circular-progress');
          let _0x3ab5c8 = document.querySelector('.progress-value');
          function _0x1ace4f(_0x1afec3) {
            let _0x5446c3 = 0x0;
            let _0x28e0d6 = setInterval(() => {
              if (_0x5446c3 <= _0x1afec3) {
                let _0x81866f = _0x5446c3 / 0xb * 0x64 + 0x1;
                _0x3ab5c8.textContent = Math.min(Math.round(_0x81866f), 0x64) + '%';
                _0x5b664d.style.background = "conic-gradient(#ffffff " + _0x81866f * 3.6 + "deg, rgb(51, 51, 66) 0deg)";
                _0x5446c3 += 0.11;
              } else {
                clearInterval(_0x28e0d6);
              }
            }, 0x28);
          }
          get(_0x1b879c).then(_0x291c89 => {
            let _0x31c107 = 0x0;
            _0x291c89.forEach(() => {
              _0x31c107++;
              document.getElementById('amountUsers').innerText = _0x31c107;
            });
            _0x1ace4f(_0x31c107);
          });
        } else {
          console.log("You are not an Admin");
        }
      } else {
        console.log("User data not found");
      }
    });
  } else {
    console.log("User logged out");
    if (!window.location.pathname.includes("login.html")) {
      window.location.replace("login.html");
    }
  }
});
const logout = document.getElementById("logoutBtn");
if (logout) {
  logout.addEventListener('click', _0x44e053 => {
    _0x44e053.preventDefault();
    auth.signOut().then(() => {});
  });
}
function updateUserId(_0x46e9d7, _0x44d92e) {
  const _0x5cfe41 = getDatabase();
  const _0x132389 = ref(_0x5cfe41, 'users/' + _0x46e9d7);
  update(_0x132389, _0x44d92e).then(() => {
    const _0x4c1e94 = document.getElementById("updateIdSubmit");
    _0x4c1e94.value = "Ändringar Sparade";
    setTimeout(function () {
      _0x4c1e94.value = "Spara Ändringar";
    }, 0xbb8);
    console.log("User data updated successfully");
  })['catch'](_0xcd4968 => {
    updateIdSubmit.value = "Error";
    console.error("Error updating user data:", _0xcd4968.message);
  });
}
const updateIdSubmit = document.getElementById("updateIdSubmit");
if (updateIdSubmit) {
  updateIdSubmit.addEventListener("click", _0x29a909 => {
    _0x29a909.preventDefault();
    const _0x268ca7 = document.getElementById('updateName').value;
    const _0x17e09f = document.getElementById("updateLastname").value;
    const _0x37ebf9 = document.getElementById("updateAge").textContent;
    const _0x3bd40d = document.getElementById("updateBirthcode").value;
    const _0x448c64 = document.getElementById('updatePersonnummer').value;
    const _0x1022fb = auth.currentUser;
    if (_0x1022fb) {
      const _0x3ccfdb = _0x1022fb.uid;
      updateUserId(_0x3ccfdb, {
        'firstname': _0x268ca7,
        'lastname': _0x17e09f,
        'age': _0x37ebf9,
        'birthcode': _0x3bd40d.slice(0x2) + '-',
        'lastTwoLetters': _0x448c64
      });
    }
  });
}
document.addEventListener('DOMContentLoaded', function () {
  const _0x208a09 = document.getElementById('imageInput');
  const _0x5474b2 = document.getElementById('imageDisplay');
  function _0x5ee8e8(_0x3662bb) {
    const _0x2046b9 = ref(database, "users/" + _0x3662bb + '/images');
    onValue(_0x2046b9, _0x57d60b => {
      const _0x2ebfd3 = _0x57d60b.val();
      if (_0x2ebfd3) {
        const _0x5b1038 = Object.values(_0x2ebfd3);
        if (_0x5b1038.length > 0x0) {
          const _0x416a99 = _0x5b1038.sort((_0x28fccd, _0x5d4ba3) => _0x5d4ba3.timestamp - _0x28fccd.timestamp)[0x0];
          if (_0x416a99) {
            _0x5474b2.src = _0x416a99;
          } else {
            console.error("Latest image is undefined");
          }
        } else {
          console.log("No images available");
        }
      }
    });
  }
  auth.onAuthStateChanged(_0x3ca67a => {
    if (_0x3ca67a) {
      const _0x10b925 = _0x3ca67a.uid;
      _0x5ee8e8(_0x10b925);
      if (_0x208a09) {
        _0x208a09.addEventListener("change", async _0x3f74bb => {
          const _0x77b26 = _0x3f74bb.target.files[0x0];
          if (_0x77b26) {
            const _0x1f203f = document.getElementById("updatePhotoSubmit");
            _0x1f203f.value = "Foto Sparat";
            try {
              await _0x43575e(_0x10b925);
              const _0x5e98c1 = _0x7eca33(storage, "users/" + _0x10b925 + "/images/" + _0x77b26.name);
              const _0x507e95 = await uploadBytes(_0x5e98c1, _0x77b26);
              const _0x3bf533 = await getDownloadURL(_0x507e95.ref);
              const _0x5dfd26 = new Date().getTime();
              const _0xd1ffd = ref(database, "users/" + _0x10b925 + '/images');
              await set(_0xd1ffd, {
                'filename': _0x77b26.name,
                'downloadURL': _0x3bf533,
                'timestamp': _0x5dfd26
              });
              _0x5ee8e8(_0x10b925);
              _0x1f203f.value = "Nytt Foto";
            } catch (_0x504566) {
              console.error("Error uploading image:", _0x504566);
            }
          }
        });
      }
    } else {
      console.error("No authenticated user");
    }
  });
  async function _0x43575e(_0x329808) {
    const _0x3527f1 = _0x7eca33(storage, "users/" + _0x329808 + "/images");
    const _0x4cedf7 = await listAll(_0x3527f1);
    await Promise.all(_0x4cedf7.items.map(async _0x117f06 => {
      await deleteObject(_0x117f06);
    }));
  }
});
const fileinput = document.getElementById('imageInput');
const uploadButton = document.getElementById("updatePhotoSubmit");
if (uploadButton) {
  uploadButton.addEventListener('click', function () {
    fileinput.click();
  });
}