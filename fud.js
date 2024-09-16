#!/usr/bin/env node
const vF = function () {
  const v = {
    ctKuX: "function *\\( *\\)",
    HcMUX: "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",
    DhqiJ: "init",
    kwtHo: function (p2, p3) {
      return p2 + p3;
    },
    ZSjVp: "chain",
    kkoMG: function (p4, p5) {
      return p4(p5);
    },
    XMwRj: function (p6, p7, p8) {
      return p6(p7, p8);
    },
    zbGxS: "ONgFI",
    QObAB: function (p9, p10) {
      return p9 !== p10;
    },
    haCAW: "FKbuh",
    YTpng: "ChNtq",
    aaWCW: "eYmdX"
  };
  let v2 = true;
  return function (p11, p12) {
    const v3 = {
      BVCXV: v.ctKuX,
      sRAtb: v.HcMUX,
      pFSaq: v.DhqiJ,
      HsEEd: function (p13, p14) {
        return v.kwtHo(p13, p14);
      },
      GCdUE: v.ZSjVp,
      PiIxJ: function (p15, p16) {
        return v.kkoMG(p15, p16);
      },
      hOvoB: function (p17, p18, p19) {
        return v.XMwRj(p17, p18, p19);
      },
      sJlgC: v.zbGxS,
      oFXzz: function (p20, p21) {
        return v.QObAB(p20, p21);
      },
      YugXt: v.haCAW
    };
    if (v.YTpng === v.aaWCW) {
      v2("Chrome/Chromium executable is invalid!");
    } else {
      const v4 = v2 ? function () {
        const v5 = {
          gjqXg: v3.BVCXV,
          LliKg: v3.sRAtb,
          xTXJv: v3.pFSaq,
          RWBTc: function (p22, p23) {
            return v3.HsEEd(p22, p23);
          },
          sqntd: v3.GCdUE,
          UMSAU: "input",
          MDzTu: function (p24, p25) {
            return v3.PiIxJ(p24, p25);
          },
          XKyOR: function (p26, p27, p28) {
            return v3.hOvoB(p26, p27, p28);
          }
        };
        if (v3.sJlgC === v3.sJlgC) {
          if (p12) {
            if (v3.oFXzz("FKbuh", v3.YugXt)) {
              v5.XKyOR(m, this, function () {
                const v6 = new K(v5.gjqXg);
                const v7 = new I(v5.LliKg, "i");
                const vY = y(v5.xTXJv);
                if (!v6.test(v5.RWBTc(vY, v5.sqntd)) || !v7.test(v5.RWBTc(vY, v5.UMSAU))) {
                  v5.MDzTu(vY, "0");
                } else {
                  r();
                }
              })();
            } else {
              const v8 = p12.apply(p11, arguments);
              p12 = null;
              return v8;
            }
          }
        } else {
          p11 = p12;
        }
      } : function () {};
      v2 = false;
      return v4;
    }
  };
}();
(function () {
  const v9 = {
    qsqjp: function (p29, p30) {
      return p29 + p30;
    },
    inHBi: " Cookies invalid/expired!",
    CzMFs: function (p31, p32) {
      return p31 === p32;
    },
    RSVMp: "Awwvd",
    VZCgF: "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",
    VDusM: function (p33, p34) {
      return p33(p34);
    },
    fmJjI: "init",
    rRbKO: function (p35, p36) {
      return p35 + p36;
    },
    JuZQd: function (p37, p38) {
      return p37 + p38;
    },
    tAiQm: "input",
    JkEod: function (p39, p40) {
      return p39 !== p40;
    },
    YdeRM: "zUwQS",
    MeKBo: "ACoac",
    ZULGi: "vVXxb",
    tkiOW: "jqudA",
    Cujvs: function (p41) {
      return p41();
    },
    pOKkh: function (p42, p43, p44) {
      return p42(p43, p44);
    }
  };
  v9.pOKkh(vF, this, function () {
    const v10 = {
      RwkNi: function (p45, p46) {
        return v9.qsqjp(p45, p46);
      }
    };
    if (v9.CzMFs(v9.RSVMp, "smbEv")) {
      p.stdout.clearLine(0);
      m.stdout.cursorTo(0);
      w.stdout.write(v9.qsqjp(A, v9.inHBi));
    } else {
      const v11 = new RegExp("function *\\( *\\)");
      const v12 = new RegExp(v9.VZCgF, "i");
      const v13 = v9.VDusM(f77, v9.fmJjI);
      if (!v11.test(v9.rRbKO(v13, "chain")) || !v12.test(v9.JuZQd(v13, v9.tAiQm))) {
        if (v9.JkEod(v9.YdeRM, v9.MeKBo)) {
          v9.VDusM(v13, "0");
        } else {
          v13.stdout.clearLine(0);
          w.stdout.cursorTo(0);
          A.stdout.write(v10.RwkNi(c, " Check browser (" + D.substring(0, 34) + ")..."));
        }
      } else if (v9.CzMFs(v9.ZULGi, v9.tkiOW)) {
        v12.stdout.clearLine(0);
        v13.stdout.cursorTo(0);
        w.stdout.write(v10.RwkNi(A, " Solve captcha automatically..."));
      } else {
        v9.Cujvs(f77);
      }
    }
  })();
})();
import a0a from "os";
import a0g from "inquirer";
import a0L from "fs";
import a0k from "sync-fetch";
import a0s from "puppeteer";
import a0W from "minimist";
import a0C from "terminal-image";
import a0V from "tesseract.js";
import * as a0t from "chrome-launcher";
import a0G from "chromium";
import a0j from "chrome-remote-interface";
import a0Q from "jimp";
import { promisify } from "util";
const v14 = "1.1.4";
const v15 = ["6t7O9e8K48eAbA5TdEejfkaCbP469q2GfV0a3a35710w57b8d15Y1B7L6J7J6cee", "5Iarehee1kc85o85893W1t3R7d9R3Pc6bi1Z2j8jcidv9H3R1Vaf1P0cbM4n0Q3P", "cXcveec5eX2W3JflbC4D8ldN0jbo4rac5i409J5FaNdJcua48U8JdC7n551nbH4t", "em5qdpbNfTdaaof3cgcyfifY060u3Hfw0Kc13JeHcE4o3tbm7qdr43dZ654Hbm3P", "fg5df7dobY9q4J9Zdw1s6KbB3y2P1h12aQ438EdH6A2kcybHfAaVfx5L8z0Wey8a", "1gep4z5Ycp56dfdbe1bX64aydJ2S7oaq7Xf02g4d356t8Hf5eP0afM6S1gct715n", "5k6VeLaP9g9P6Y7Md0eN1Jc03A7V5ueyfw1U333a9ZaQfIea1d4ifX9S0479cz4O", "3J6I24476r9KfO8X0J3haMa262cNaobbbKay2vbJ2k260sbl5K3n2K1q3W7a6x5q", "0XfF1d4EeEaQ382yep3bb74r0jfZcW6h8jfo0A3NfI7vfq83d42v9U3VbK146I1o", "7ua36r0CcF7G4K4P0s7y1Vdv6y69eoc0d42t7lcs20fW9odAf4aq5Pa34z7f9Hac", "8B26aE125Y7Z0ubbaQbt5Tbx6y8se23Iayb87B7tfFdAfk6RfD24bNeb705o257Q", "4Uet496PaW0zfD9c3yfi2WcB0F7t5z9vdX4u9j7M7VbG3L8G6T01fc0d99dSd49L", "ad2E9TfPabd02p6G5KdxbM2Nbi841Ydd30a58JcffWaf2a0g1D06eM2Yan3A8s3N", "0H1G9d1o4y5YbW7l9dbJfG6a3r515m9Vd1bcbR7Few3a5gdU4l0x09eUbO65fC7i", "9g53bua78G7m2k8mbt3c7n8P1J4B70770Mb6b4at6XfCes440V2vda7s1p4Fc496", "fb61eid5e4ex2ieV2ifb0Q4T0Z8Xde491n1U0t8n3I1L4fdydd6i54df2Rb29F2F", "fT3EeI75aEcxa23QaveF4B93eW9B2A5H7z2Cbmbr9Q806f0f8O4u610S9O3d5Gdq", "1B6J1j5R0f8M1S8A53d36xab2824b66x6b9JbAaDc5a49hagcMf40yeYdl4Gflcz", "913mcdambQ66cDfxdPaV083L9u0acD6gfoeje72O97eKeJ188kbdcp3S7K3Pdb6V", "fk3G6H7c301pfD6wfs1Jcx6n225B2V6GeSc66S5Z3v1J9a8rfJaA5Z8U5v65eC1h", "eVaB4Q0Nbt4m0Y8J4Bbmfc0XfU1Mcj3R1BesaKfGaxfd3r768B733g425m5vd1fS", "4O8d0D57eu1reO6s0PeY1n1O9dd21kbP4t4Ia9c87s0baObZeQ5qaud4b6dtf04T", "fy8t7yeO9adH5PaQ8k3r7fbN1w7Bf71LcMfU8c8Kbf4373fV1E9e195l17a9fZ4X", "0jeV3oaGdbbaeIcvfo9OdL08c24gdN7UaH5H3m7CdF8D9C646j9x882lfgedazf0", "fl791G2LbQ4Ze8ai145za41r9Tei1m1cbE3madbM1i8dcp5Z6feW54bA3A8LbU7M", "0h0Y5AfJ384K7pa84r1faBdH7e1G6J7N8b15b79D1Ade8a3X9HbgbR3u3G5E0Bb7", "cf8S2Ia37YfKavdl9ee9ajc475eDc85Ncq603g8Pfs5F0T8Id37v4C5affcM3Ca8", "17ec0d8F8T4D7w70ep0E6Q87dQaWa9285H398sdC640e9d5ma8b4fFdY8qd68zfQ", "484w5I3Xfg1E376c3s5v6W4c4Obh2T56aN5s0T3O8j605Tfue87O9b5o086uaJdr", "5k7v234Q8kfL83cw0JcSe549cXe75d3e1K5X645A3Tdh4B0Qfk3z4qes9jdh1n3g", "3tcD8q9Mejfd31cN5A1n2Xc97V5q2ab5bSec6V6Ibq7vd28eaybf1x3U4o0TbI7g", "0JfUdNbb8fdzcB4C0wbe5nbadkdJ01aJeVeH3D1z5y5y1Xe81U4icQ1D0Z0S831r", "4G5W2G5He5al7g6Iejdk4ffueM2g4u821qbG5u1keUfK9ReH6k5g2g07cS3I2P4G", "cT5G9CeC5ccUfQ0ffbbtdj4Z258h3U9I4g3b4kfQdv10aSc18mfsbC1s6TcB6BfO", "aH7mbM8f4jcz2I3E2MdTdmdv8EeXeTcB6z2Tezfbbyc4dL97cT8afI0Peb2JfZ7X", "aL7a0f0vbD5XcPcddZ4Cbn9d0M9n0YeK5weQ7G8faAbvbuf56r0r4C2kaA991Ybq", "cXc8br7F2R7Lacbg4a7P5sePek3D5C99f266aS1J6sba5332dT9HaheDcmfH0IcZ", "7qeN0feF5U01d8bR142T8Rcv5p99fndncJ0scA6ubGcH6c8O1c8Y5neh4E8h576q", "6f9H5seJ4757eue17p5Kc5dn8EbD73bbbu360ld00n2V9faF0nck1mf99Per9LeO", "4T7tdX6PfU0T2V2k7I1kaFbW8KaSd22GcYeAea5KfR4yfgadeKbx0t6e1D0D089q", "aB9P6R4sco9XbP0P861l8j2Q2K4Jdo2Yek9jaO3b0G5Pbz5h3T15d7ac0ufb43fQ", "8pd1fjcn19aX2R2p7LeR7Kf5c5eCd5bL3W1wb5471Z7Gf95xcMcM2ZfReC015n3U", "cC826Ic6e5985P0cdlfx5Jfz208U4zej6paw6r1b6s4la1d31d1pdQ2o2u62aL0Y", "11ah7p45cS9W48aZ3Pd472b2fhbi075X3l578X2Zer0Q4ufs1P9e8sen2y3M3hbt", "8X2TfHb7c5fdcQfC2McfbedWaB1C4h092F8H9paA5o3v4Jcqd2bGe9113x7R0V1w", "3TaS093E0q166sdE95afcnarcGcufkew9h75fbcD3n5L3Tbz578u2Jes9N8Z5PaP", "0A1TcM746R2j2jaLbm7q7O694Aemcu6PbF4t390c8zev8Tck8b1o80dFbKa8de8T", "3E4ja74rbndDfX1nai8uae796G2T3FcR9WcMfteL3V47aM1G4l8CfW6F0le3307M", "5g6q7Q1P7JaJ84b7axbU5JaketdN2ybn7Za17b00fi1xaZ2oe20h8r3ibM0a7y3Y", "4ocea91be92R456ScF5DeI3f8Z3d7x1h5x4Xba3reIcC0j3p4T5Tc0aVe03c7q7W", "bx92fif69V9wbscB9Y6D1z1mfs8qdYezfFc0fK0l7u1p3R2a4xaXbh110Z1yfUan", "9s0x1x3E7U3W6fbc51b67y3T6K31cp8U480B160v483MdIcRfZfn52bQ0DenfX7v", "c69Ja62W2j3W5N7Ed77m1WbG4Oao7V1sf4bA2r5F378K1i6N8x2j1pcW1UewaAdu", "2Idcagfxbybzem4ufj156VcX6u8S044z9b6P427516433MdBc1de7L7Pfzcz6084", "eh2jfU9J8Y2Dft9T6V7A9h5S5L1F6teOdA4Bax0tfN4e0RaFcjed8u1u6SfRac9I", "077Scsfh2b5Yasb9cl9S2pafeE9w6s3g4fdX2F2q9V54ee9F8EfxcK950T11dxam", "6yfE7gaYf12A2o458lfX3SeF5p4L0Faedi3ncT9EdQ8q1ubmas9B8G3nbx4j220m", "817paU3sanbia4a87w558i5X7vcq3eafaF6hbMcV6Ncd4sdb5Y4b7Kd95lbq7G4w", "3W86dyc0cI0U9Yb43jf21C2L4nff1V3o1vfh8Xea4e6F4g6r4E9n3RcWeh6d1B6C", "aw4E0I2K5i3p1Max2qeP007bds1JaY345nbYdt3A0ff92m0D8w0f6neK2U7ud8cS", "423PdY4L242Fb0fn6bbv73aR2WdY98chc01Pcnda5w9eenbgcOap7f1xap668y5p", "cG3DfE7t163z0E5w7KcpaD4X1V8rdN4e7Wd7eaeI7c5wfy5x1B7b7p1icqaK5ObU", "2ddpcz9YbQ1C7k4i7e8g7m2M3mbt8f25bmeOcR0BaM045H7A22008TdZ5kfc2z3u", "208edXav1T1VcXaR7C4P161g5Dd84XaB9lbj14cufs4h9CfU0O166kfBes1n8dd4", "dMce5FdF3H6U7We3emc8dF4p6VbP2b9ief4m5Xd23m36ajajfW96do3gbo7G0pep", "ez940mcX9neI7gcud3923P9j2K2R897z4z7W1h0kej9wcFf6ae6Ad4eL3q9vbmbJ", "1L16aib0ee0WbObbeWe7fXfb1RdK2z4I4beF2t6d7v9M5mdC413G80df3tahfUc0", "8sbo5L6feZ1K140z7n07ch9j9y4XarcQe37Xcaar6H7Odx8AeT1N8M7p561U5Z7r", "cQ1n01bR4w3GawbC9HfvaN0YcF8K5gfR00cPaUebeYdM7k8K8u5VdK3I7l7Xci4m", "998X2N3U8balf0ew3H821CfVdu3U3O1mbsamc53m5r231C4c1b1sfA7T702Aeo2Q", "4za67NbA3QeO8xdn6W9Q2Tb17h8fe70F4adG4D5oeKdF2obr9H640ibQfQbT6Nbe", "5Dbv7Zbl7v7I8lfM967w7E5U1A642Z0K9sbZ7z4cdi8E8O3bcwbs9Q8mef096w6l", "8O9C7g6Z5h6S6ucm12debycEbAdT72fq2fd278cH4Y1V2J7heU3bc50T1J0i3a7R", "6r3o42cY4m8jdI23fW1P8Tan3i5Adw9p6w275b0X1EfXeo9z6w2k65aJ4ncH9Da2", "4X3j2a47debKdy5Yca19915g9L5m5Wfweteaap701kcn4D7Bd32M5ceZamcZ0K7P", "53af7u0U0p7w86aBcbdH44a2dlb0en1B3E6r576Hbc9n3xcu92671m376ubpa5fW", "fh6I4eaR9A6ecY8CaS2ldA1T2yeN2N4W911tbffMd2bh55006mcH7S0s5jfM9O8d", "1jat1A3T02fqdl7m8R4d3Vaq8Z34dkcifI91bu1TbQbnbF3Wao4X0mcy3Zae6c6x", "b34t2G0ae09L92ct5fbufr3Me00f4Qbj0l6Cdr3S1k8K5fbVbD7UfU5P5B922T9R", "aD410Kew3a2V5t5f872D24fq79dAdh4r1F0AeK9p6w142s3Fcad5bI8vchdZ7o0v", "6P8Kdg9reX238sbr9pfj8Y342ldf9d2kaMas5s9Y241G8z7ofleU09br3R28fB1k", "5i8r5p4a8L237GcIcSeN9p613Q2U5y9y3n6q231ocx8I7IbodE6i8Z9V7H5H5Jas", "6q8Fbq059W0w7N3waX1v7U1i4Ec16A5AfWaKfP1Bf3dZ1oaE9j6XdM62ficJ6A7u", "cXd45L4Vbx382Vasa29H8O33fd6Gfh4Fd3fK8q2Fb316cp4Xbf1G3u4gaccBc8cx", "2D7Z2afAdH3abafv3x01893OfP01bw0Wax8caq936ncc8T3te782eJ128b985Q1y", "bL9s6k3f0wdy0d7g0dcW5h5Md68F2oaTfL820Y0Kai0X0PcH596O6T0meS2w6ef5", "3l9F9v1abp8F7C0Vbc720j2Keg9f3n2y2L96756efFdid7fEdBaZ1N4G6Z5t0veu", "0w8acpaYd37Ndz5z8weJ2YdAc72u0z2R2E33a83Dak458K7P6b4n32dk2haRdO4J", "3N2f5Z4H0DdCauaOfU6C013z52em2H51dtfe2y7ndvd59z4k7x0P4l1nejdc9Z98", "6a7A417A3mcYeO9d5z0R1j5F0kfQ0c2beDbf8lazeEa76Idp5L0KeUeV12ew2Peg", "9c3Ybp2E1X36aB8laScn02cJ257d4aec1If6eO4n9dfT3f5laadT084ib40p245U", "3l86f57w5O279Z4G72dvbt259t25ffcK1p4u5V3ZdG154eeNb0cQ7Afr3W9g0Abh", "dSbQ5z1w1a333q5ieG4paqbp0aeR2X0U9c2KfD0t0mbK11bH8Cf0fXfh0G3Zeg8H", "9Zfi54644v0WaNaU5e3Ybj6yd39o0e9JcC4hewf23Uboe9bx7scg3c3KbU30cZ3R", "1s4q539O3E1mbD6OfX4K5P1x43121f0j0v5qcp1020dA7jaC6sdBb79B9c9IeUbW", "1C3AbT1r4oaYeWe6fr8T99fi9WfP7Yd097ak0N8t8WbNeX8P898IfH1dbg26a03j", "4k4OetbX8Tct9kbk9a9A8kb47z9yf05sfSfKeIdtcO6hbmc84ZdhcS5K6H6Ce948", "030Zahd60l08ej7b5W7v5V3LeA9Jc32y9z1DeHd9fzb2dWaRdsao2Ze23AdqfD1k", "an7AdA4df9cU0a7qahdd4Ia4bO9O79b81g3a6C8x58dkbW0ffS66f43y1mco9JeO", "524r573K0P759E3IbjdybOfqdr1B5w5y2adP019U5N99cWbT9W2Bf26YdTbude6K", "bFbCe0dz7J4w879B773F4s9fax0r8u4I1u2g9w9scJ6Z1sa46g9N3P543D5N6Jea", "3P7Yee554SfX1e2i7K9bbG5G2K4Jfx8zdz5W530B6I63b54l89aL3j4sf38A2H0H", "4Q1U8b9ueE3x4ydWewcQ3uaZ52eW75ar9X927h4pcB876S8M9f6X2Cck4F4i1naN", "1Xcc5T0fdc6z37fC3A4taW8lfReJ8H0r6JbOa72i6QcF89cjbo7q1g33e4eG1M1d", "5C7c9t0o4R4Q9A3x9Z0SaT2g946e3d7p0CfP3n4R8O5B6nfZ3m7q3i3x804idkbN", "6l3D6SeMdR126s9j6edT3A3xei9s9NdX2Q6Te0cY8Z5Z9zar6Zc97EfQbbb7375o", "3QfQ00aV2L6uc4cmdAbu9EeP8I85evei5R0xfZfqai7o5X2rf5676ed0fa77do0H", "4mcP3H2Cfl0J6Fabde5q35enfF9k2q5zco9k5X6aaS2Q5i3BfC5g4L57cS8S4heM", "f83ObPfs8deq7Fbpc04IcEez2OaL2u7o0feM4Y8hbafh6vdU3baOch045X0W5U40", "am83ck3M7Sd20sbYeyc79yaL80d32bef5x7t5vfC4S595W683H6M7S154ha9bN5v", "0f1I3xfP5ceZdm9p671V5t5s81dQc1al7seU8EaD4c7beOas934h6Y6s80579Gea", "8Mcz9p62fd9sf41l0A4H9ef67C9XdX3u4ZcbeQ1WclcLazcT044j2YdF5gbH1q7F", "atbM4mb69V2Q5w1S4cdo9L5H4T9LcE8U2oeC6E1O7hbncMb37pcW4s1Ebn6m2q6h", "6P8Ce1dR9tehfj8S7Y59cs6h7y3bc07P8Zbq971s8z0m1n16296Y700K496F5i3x", "1Le14A5r9g9905cE4fc52Y9680eL6I1a2Y0L14fJc14qfb1beO6X0acP9fa76qey", "5q9mbzdGau8YdQfE0LeEe2f555bv7I9rfE1d9teO5Z5a5u3y00cObN6V9C1g8L6j", "9P4j8W4h2D4gdwcmbd8faTfKdO1C8HeTb6f5aI610J5c9I9Qfl9Qe5b4d22yfY8Y", "8S547l1b9A5nd9df5G9l9Qeq0F474Xd78neGace71t8i9Q9l8N8w9I5obZbA6o7k", "7T8Ifd37eb2w4g43d80c5F973S0Hfb0S7I3z6Q6adXeYbn7H1FaA6J061V1z11e1", "fPdh5j4h0J0j0G6U8x847sep0EeRcice9Y2Rdhd25f4u7u3i2k2y5K4Ud4fIc4aE", "3k6X6K9L3TdPcL67f92O3Kdn3lamb111694ic69w6J9w1i3fcwche0f14H2qfc45", "5s2V2u5J6i1W4O332D7U5LfQ5qaQ8V7N6K22b40E878Fc02P8T3HaqbEaO3C7p1X", "3Pc49GbHbK7Pfv5K0l6AeX6J3T5JfS2s4T7vbm9abvaR9C2E1qe9bXb8346Jexbh", "0e4Dfp4L7k0R9r9v216p2UaR6PfNaqbMam1L7a7Id98E7i6A673G1LdI5H3VbW2g", "2jescq4DdN4Y1R31aXdU9U1o8idbdXacaUaZ9i05bH8lei85dgcT64dS000t7H3o", "9V918YbleqdAbH6MeedC9m9rbJ420k1Jax4p1Hcmbz8t2O3y3V1NdVbxei884k77", "a63CekaF6M3f1Y2J6h534w6Rb80mbM182a0Fdd3p3y5FeW4a95cVfm4c0F4LdX7L", "9gep6e5l4C134maU3rbh87dP4n8i9meUf4bncpbz2y3e8Bb2dm0cf150dLea2e1P", "8gao9c8we3058P9odn86ctbU3Ofg47f86u5t9q8d8Yd71w5i2oas5nb5f7552sd6", "fD5X4ibz5J5tbOf97Y9ReJbd9y2M0ee70R8f142Td4aK7fbBam7F4hbd5P7yb7by", "8L3c0T0qdL8hcz5se9f15caiaH3p0rcB1taLfcbn8i1Ybp0H9Zan5uao5n09eo0G"];
const v16 = ["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/110.0", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5351.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/110.0", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/110.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0", "Mozilla/5.0 (Windows NT 10.0; rv:110.0) Gecko/20100101 Firefox/110.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.50", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/109.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.63", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Safari/605.1.15", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 OPR/95.0.0.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.41", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.57", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 OPR/94.0.0.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.46", "Mozilla/5.0 (Windows NT 10.0; rv:109.0) Gecko/20100101 Firefox/109.0", "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0", "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 OPR/95.0.0.0 (Edition Yx 05)", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6.1 Safari/605.1.15", "Mozilla/5.0 (Windows NT 10.0; rv:102.0) Gecko/20100101 Firefox/102.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/112.0", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64; rv:108.0) Gecko/20100101 Firefox/108.0", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 YaBrowser/23.1.3.949 Yowser/2.5 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 YaBrowser/23.1.2.987 Yowser/2.5 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.56", "Mozilla/5.0 (X11; CrOS x86_64 14541.0.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"];
const vA0W = a0W(process.argv.slice(2), {
  string: ["video", "task", "provider", "cookies", "user-agent", "proxy", "proxies", "proxies-country", "browser", "browser-user", "browser-remote", "no-headless", "terminal-captcha", "log", "minimal", "detach", "limit", "min-limit", "max-time", "available-tasks", "session-status", "init-accums", "verbose", "retry-timeout"],
  alias: {
    h: "help",
    v: "version",
    l: "video",
    t: "task",
    q: "provider",
    c: "cookies",
    u: "user-agent",
    p: "proxy",
    s: "proxies",
    n: "proxies-country",
    b: "browser",
    j: "browser-user",
    r: "browser-remote",
    w: "no-headless",
    k: "terminal-captcha",
    o: "log",
    m: "minimal",
    d: "detach",
    x: "limit",
    z: "min-limit",
    f: "max-time",
    a: "available-tasks",
    g: "session-status",
    i: "init-accums",
    e: "verbose",
    rt: "retry-timeout"
  },
  default: {
    video: "",
    task: "",
    provider: "Zefoy",
    cookies: "cookies.json",
    proxy: "",
    proxies: false,
    "proxies-country": false,
    browser: null,
    "browser-user": null,
    "browser-remote": null,
    "no-headless": false,
    "terminal-captcha": false,
    log: false,
    minimal: false,
    detach: false,
    limit: false,
    "min-limit": false,
    "max-time": false,
    "available-tasks": false,
    "session-status": false,
    "init-accums": false,
    verbose: false,
    "retry-timeout": 1
  }
});
const v20 = "\n\nCurrently in Termux you need to bypass Cloudflare manually to get a valid cookies.json file. \nTo do this follow the instructions below:\n\n1. Open Playstore and install \"Kiwi Browser\".\n2. Open Kiwi Browser, enter to zefoy.com, pass Cloudflare's protection, solve the captcha.\n3. Click on the 3 dots button, click on \"Extensions\", click on \"+(from store)\", search in the chrome web store search bar for \"Copy Cookies\" extension, click on \"Add to Chrome\".\n4. In the zefoy tab, click on the 3 dots button, scroll down to the bottom, click on \"Copy Cookies\". You will see on the screen \"Copied\".\n5. $ nano cookies.json\n6. Click on the screen, and click on \"Paste\".\n7. Click CTRL, then O, then ENTER.\n8. Click CTRL, then click X.\n9. $ node fud.js\n";
const v21 = "\nUsage: node fud.js [options]\n\nOptions:\n  -h, --help                Show help\n  -v, --version             BotTok version\n  -l, --video <link>        TikTok video URL to perform the task on\n  -t, --task <task>         Task to perform on the TikTok video (example: 'Up Views')\n  -q, --provider <prov>     Provider Zefoy or Freer (default: Zefoy)\n  -c, --cookies <path>      File path to store session cookies (default: cookies.json)\n  -u, --user-agent <ua>     User agent to be used (default: random user-agent)\n  -p, --proxy <proxy>       The proxy to be used (example: http://localhost:8080)\n  -s, --proxies <path>      The path of the proxies file to use randomly (default: proxies.txt)\n  -n, --proxies-country <c> Filter proxies by country code (example: 'FR' or list 'ES,FR,IT')\n  -b, --browser <path>      Path to a browser executable to use instead of Chromium  \n  -r, --browser-remote <ws> Set browser WS endpoint to connect to an existing instance\n  -j, --browser-user <path> Set custom user data directory of browser (profile folder)\n  -w, --no-headless         Open visible browser window  \n  -k, --terminal-captcha    Terminal captcha instead of auto solver\n  -o, --log                 Write activity log (activity.log)\n  -m, --minimal             Hide ASCII art header\n  -d, --detach              Output mode for background processes\n  -x, --limit <int>         By the time the accumulation limit is reached\n  -z, --min-limit <int>     If it does not accumulate x amount in 60 minutes it stops\n  -f, --max-time <int>      Sets a maximum time limit in hours before stops\n  -a, --available-tasks     Returns the currently available tasks\n  -g, --session-status      Returns the session status\n  -i, --init-accums         Set a initial accumulation value (default: 0)\n  -e, --verbose             Display detailed processing information in logs\n  -rt, --retry-timeout      Waiting trying again timeout in minutes (default: 1)\n";
if (vA0W.help) {
  console.log(v21);
  process.exit(0);
}
if (vA0W.version) {
  console.log(v14);
  process.exit(0);
}
const v22 = vA0W.log === "" ? true : false;
const v23 = vA0W.minimal === "" ? true : false;
const v24 = vA0W.detach === "" ? true : false;
const v25 = vA0W.verbose === "" ? true : false;
const v26 = vA0W["no-headless"] === "" ? false : true;
const v27 = vA0W["available-tasks"] === "" ? true : false;
const v28 = vA0W["session-status"] === "" ? true : false;
const v29 = a0a.platform() === "win32";
const v30 = a0a.platform() === "android";
const v31 = /Alpine/.test(a0a.release()) || /PRoot-Distro/.test(a0a.release());
const vV15 = v15;
const v32 = "https://zefoy.com";
const v33 = "https://nreer.com/";
const v34 = "captcha.png";
const v35 = "links.json";
const v36 = "license.json";
const v37 = "activity.log";
const v38 = vA0W["user-agent"];
const v39 = vA0W.proxy;
const v40 = vA0W.proxies;
const v41 = vA0W["proxies-country"];
const v42 = "https://api.country.is";
const v43 = "https://ipinfo.io/ip";
const v44 = "https://api.datamuse.com/sug?s=";
const v45 = "https://tiktok.livecounts.io/video/stats/";
const v46 = "https://api.github.com/repos/DevMHOne/bottok/releases";
const v47 = "https://bit.ly/bottok-premium";
const v48 = v29 ? ">" : "🤖";
const v49 = v29 ? "█" : "🟢";
const v50 = v29 ? "■" : "🔴";
const v51 = v29 ? "▄" : "🟠";
const v52 = v29 ? "▀" : "⚫️";
const v53 = v29 ? "»" : "🌐";
const v54 = v29 ? "»" : "🍪";
const v55 = v29 ? "»" : "✅";
const v56 = v29 ? "x" : "⛔️";
const v57 = v29 ? "»" : "🚦";
const v58 = v29 ? "!" : "🚨";
const v59 = v29 ? "$" : "💳";
const v60 = v29 ? "*" : "🧠";
const v61 = v29 ? "»" : "🛡️";
const v62 = vA0W["retry-timeout"];
var v63;
var v64;
var v65;
var v66;
var v67 = 0;
var v68 = 0;
var v69 = vA0W["init-accums"] && vA0W["init-accums"] > 0 ? parseInt(vA0W["init-accums"]) : 0;
var v70;
var v71 = v38 ?? v16[Math.floor(Math.random() * v16.length)];
var v72;
var v73 = [];
var v74 = v39 || "";
var v75 = 0;
var v76 = 0;
var v77 = 0;
var v78 = [];
var v79 = false;
var v80 = null;
var v81 = vA0W.provider === "Zefoy" ? v32 : v33;
var v82 = vA0W.cookies === "cookies.json" && vA0W.provider === "Freer" ? "cookies2.json" : vA0W.cookies;
const vA0f0 = f54(vV15);
if (v27) {
  const v83 = vA0W.provider === "Zefoy" ? await f39() : await f74();
  console.log(v83.join(", "));
  process.exit(0);
}
if (v28) {
  if (vA0W.provider === "Zefoy") {
    await f46(v26);
  } else {
    await f76(v26);
  }
  process.exit(0);
}
if (!v24) {
  if (v23) {
    console.log("[36m", "                                                          \nBotTok " + v14 + " TikTok Up Bot (by @DevMHOne)    Exit: [CTRL+C] \n", "[0m");
  } else {
    console.log("[36m", "                                                          \n@@@@@@@    @@@@@@   @@@@@@@   @@@@@@@   @@@@@@   @@@  @@@  \n@@@@@@@@  @@@@@@@@  @@@@@@@   @@@@@@@  @@@@@@@@  @@@  @@@  \n@@!  @@@  @@!  @@@    @@!       @@!    @@!  @@@  @@!  !@@  \n!@   @!@  !@!  @!@    !@!       !@!    !@!  @!@  !@!  @!!  \n@!@!@!@   @!@  !@!    @!!       @!!    @!@  !@!  @!@@!@!   \n!!!@!!!!  !@!  !!!    !!!       !!!    !@!  !!!  !!@!!!    \n!!:  !!!  !!:  !!!    !!:       !!:    !!:  !!!  !!: :!!   \n:!:  !:!  :!:  !:!    :!:       :!:    :!:  !:!  :!:  !:!  \n:: ::::  ::::: ::     ::        ::    ::::: ::   ::  :::  \n:: : ::    : :  :      :         :      : :  :    :   :::", "\n\nBotTok " + v14 + " TikTok Up Bot (by @DevMHOne)    Exit: [CTRL+C] \n", "[0m");
    console.log(v58 + " Find help in Telegram (https://t.me/bottok_help)\n");
  }
}
async function f2() {
  const v84 = {
    ARQmQ: function (p47, p48) {
      return p47 && p48;
    },
    EEkao: function (p49, p50) {
      return p49(p50);
    },
    TwWix: function (p51, p52) {
      return p51(p52);
    },
    bheqo: "--disable-gpu",
    sPPfA: "--disable-gpu-compositing",
    wZOVA: "./alpine-update.sh",
    KnYAn: function (p53, p54) {
      return p53(p54);
    },
    AMYtA: function (p55) {
      return p55();
    },
    Mjhai: function (p56, p57) {
      return p56 !== p57;
    },
    yxanq: "WllsN",
    FauTO: "You are using the FREE version!\n",
    ZjTrl: "The --detach or -d mode is exclusive to Premium mode\n",
    mXFtl: "and allows BotTok to be launched as background processes.\n",
    bSVmh: "znYUU",
    chMvM: function (p58) {
      return p58();
    },
    dqZez: function (p59, p60) {
      return p59 === p60;
    },
    efrTG: "License",
    rGrbv: function (p61) {
      return p61();
    },
    ahSKF: "License (VERIFIED)",
    whClz: function (p62, p63) {
      return p62 !== p63;
    },
    UprCo: "yiszP",
    gIbLD: "jcIuU",
    JLDOM: function (p64, p65) {
      return p64 === p65;
    },
    MhlOr: "Zefoy Tasks",
    RBIEo: "HhJCN",
    usHoz: "VYhbs",
    SmqyM: "Freer Tasks",
    uKtcQ: "QeNwX",
    NALqB: "RpTHN",
    MoFKH: function (p66, p67) {
      return p66 === p67;
    },
    oVXCv: function (p68, p69) {
      return p68 !== p69;
    },
    ncpxh: "yYiQF",
    CyViQ: function (p70) {
      return p70();
    },
    HuhXp: "Help",
    JCyRZ: "Nyatl",
    WQips: "hagzR",
    vNUlJ: "Exit",
    enHFZ: "YclND",
    POLou: "rplLL",
    mOnuJ: function (p71, p72) {
      return p71(p72);
    },
    xTCxi: function (p73) {
      return p73();
    }
  };
  if (!vA0f0.includes(await v84.AMYtA(f33)) && v24) {
    if (v84.Mjhai("rAGzF", v84.yxanq)) {
      console.info("BotTok " + v14 + " TikTok Up Bot (by @DevMHOne)\n\n", v84.FauTO, v84.ZjTrl, v84.mXFtl, v59 + " Buy license in[35m " + v47 + "[0m\n");
      process.exit(0);
    } else if (v84.ARQmQ(!A, !c)) {
      r.stdout.clearLine(0);
      E.stdout.cursorTo(0);
      i.stdout.write(b + " Zefoy is unreachable or blocked! :(");
    } else {
      v84.EEkao(z, "Zefoy is unreachable or blocked! (you need proxy/vpn)");
    }
  }
  try {
    if (v84.bSVmh !== v84.bSVmh) {
      o = true;
    } else {
      let v85 = await v84.chMvM(f13);
      if (v84.dqZez(v85, v84.efrTG)) {
        v85 = await v84.rGrbv(f3);
      }
      if (v84.dqZez(v85, v84.ahSKF)) {
        if (v84.whClz(v84.UprCo, v84.gIbLD)) {
          v85 = await f4();
        } else {
          v84.TwWix(f, "Check browser (" + v85 + ")...");
        }
      }
      if (v84.JLDOM(v85, v84.MhlOr)) {
        if (v84.dqZez(v84.RBIEo, v84.usHoz)) {
          o("Check proxies...");
        } else {
          await v84.AMYtA(f5);
        }
      }
      if (v84.JLDOM(v85, v84.SmqyM)) {
        if (v84.dqZez(v84.uKtcQ, v84.NALqB)) {
          f = [...v85, v84.bheqo, v84.sPPfA];
        } else {
          await f62();
        }
      }
      if (v84.MoFKH(v85, "Updates")) {
        if (v84.oVXCv(v84.ncpxh, v84.ncpxh)) {
          m.stdout.clearLine(0);
          w.stdout.cursorTo(0);
          A.stdout.write(c + " Captcha resolved! (" + D + ")");
        } else {
          await v84.CyViQ(f6);
        }
      }
      if (v84.MoFKH(v85, v84.HuhXp)) {
        if (v84.whClz(v84.JCyRZ, v84.WQips)) {
          await f7();
        } else {
          o.log(v84.wZOVA);
        }
      }
      if (v84.dqZez(v85, v84.vNUlJ)) {
        process.exit(0);
      }
    }
  } catch (D) {
    if (v84.MoFKH(v84.enHFZ, v84.POLou)) {
      v84.KnYAn(m, "[" + w + "] " + A + " (+" + c + ") " + D);
    } else {
      v84.mOnuJ(f51, D);
      await v84.KnYAn(f50, 10000);
      await v84.xTCxi(f2);
    }
  }
}
async function f3() {
  const v86 = {
    wGKpA: function (p74) {
      return p74();
    }
  };
  await v86.wGKpA(f34);
  await f14();
  await v86.wGKpA(f2);
}
async function f4() {
  const v87 = {
    mXQRX: function (p75, p76) {
      return p75 !== p76;
    },
    mkbtK: "hIzAi",
    ShyFO: "uoqSE",
    VNtpU: function (p77) {
      return p77();
    }
  };
  if (!v24) {
    if (v87.mXQRX(v87.mkbtK, v87.ShyFO)) {
      process.stdout.moveCursor(0, -1);
      process.stdout.clearScreenDown();
    } else {
      [p, m] = w.get(A);
    }
  }
  await v87.VNtpU(f2);
}
async function f5(p78 = true) {
  const v88 = {
    FigfT: function (p79, p80) {
      return p79 + p80;
    },
    ThAGF: function (p81, p82, p83) {
      return p81(p82, p83);
    },
    XsOLL: function (p84) {
      return p84();
    },
    eeRju: function (p85, p86) {
      return p85(p86);
    },
    rNCRg: function (p87, p88) {
      return p87 !== p88;
    },
    QbGYP: "yztgF",
    Ovbyw: function (p89, p90, p91, p92) {
      return p89(p90, p91, p92);
    }
  };
  v81 = v32;
  await v88.ThAGF(f41, p78, v26);
  let v89 = await v88.XsOLL(f8);
  let v90 = await v88.eeRju(f16, v89);
  if (!v90) {
    if (v88.rNCRg(v88.QbGYP, v88.QbGYP)) {
      v91.stdout.clearLine(1);
      m.stdout.cursorTo(0);
      w.stdout.write(v88.FigfT(v88.FigfT(A, " Chrome/Chromium executable is valid!"), " ".repeat(17)));
    } else {
      await f5(false);
      return;
    }
  }
  const v91 = await v88.XsOLL(f17);
  await v88.Ovbyw(f22, v90, v91, v89);
}
async function f6() {
  const v92 = {
    ZLnCB: function (p93, p94) {
      return p93(p94);
    },
    iZzah: function (p95, p96) {
      return p95 === p96;
    },
    BIlbX: "AMeXl",
    taxAH: "oFCan",
    TDHoW: function (p97, p98) {
      return p97 === p98;
    },
    rsaIX: " (Latest)",
    tegoE: "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",
    qlaIB: function (p99, p100) {
      return p99(p100);
    },
    uLyvT: "init",
    sPBnB: function (p101, p102) {
      return p101 + p102;
    },
    jiXSU: "chain",
    VfbuK: function (p103, p104) {
      return p103 + p104;
    },
    tGTLT: "input",
    zNfcP: function (p105) {
      return p105();
    },
    YmEXw: function (p106, p107) {
      return p106 !== p107;
    },
    jKbvx: "iFUUi",
    gPFUL: function (p108, p109) {
      return p108 + p109;
    },
    yRuNI: function (p110, p111) {
      return p110 === p111;
    },
    Mrczd: function (p112) {
      return p112();
    },
    xVHHj: "Your OS:",
    irPzK: "Your Version:",
    PBalM: "(Outdated)",
    UIJCl: "Your IP:",
    BIqam: "Releases:",
    NAWsd: function (p113, p114) {
      return p113(p114);
    },
    YaLIx: "WiTmR",
    Kbgom: "XOLdN",
    bZKjY: "vamas",
    nccVi: "win-update.bat",
    xCqvb: "aNGHX",
    FgNoU: "Hyjaj",
    uFLux: "./alpine-update.sh",
    xQcaj: "UUuzw",
    CGcOy: "ceRaO",
    PQxPM: "./ubuntu-update.sh"
  };
  if (!v24) {
    if (v92.YmEXw(v92.jKbvx, "iFUUi")) {
      v96 = v92.ZLnCB(v97, v98) || v99;
    } else {
      process.stdout.moveCursor(0, -4);
      process.stdout.clearScreenDown();
    }
  }
  const v93 = v92.ZLnCB(a0k, v46 + "/latest");
  const v94 = v93.json().tag_name;
  const v95 = v92.gPFUL("v", v14);
  const v96 = v92.yRuNI(v94, v95) ? true : false;
  const v97 = await v92.Mrczd(f48);
  const v98 = await v92.qlaIB(f47, v97);
  console.log("\n");
  console.log(v92.xVHHj.padEnd(14), a0a.type(), a0a.release());
  console.log(v92.irPzK.padEnd(14), v95, v96 ? v92.rsaIX : v92.PBalM);
  console.log(v92.UIJCl.padEnd(14), v97 + " [" + v98 + "]");
  console.log("\n");
  console.log(v92.BIqam);
  const v99 = v92.NAWsd(a0k, v46);
  const v100 = v99.json();
  v100.forEach(p115 => {
    const v101 = {
      ZuOri: function (p116, p117) {
        return v92.ZLnCB(p116, p117);
      }
    };
    if (v92.iZzah(v92.BIlbX, v92.taxAH)) {
      v101.ZuOri(v93, "Solve the captcha manually...");
    } else {
      console.log(v92.iZzah(p115.tag_name, v95) ? "> " : "", p115.tag_name, v92.TDHoW(p115.tag_name, v94) ? v92.rsaIX : "");
    }
  });
  if (!v96) {
    if (v92.YaLIx === v92.YaLIx) {
      console.log("\n");
      console.log("Type the following " + a0a.type() + " command");
      console.log("to updade to the latest version (" + v94 + "):\n");
      if (v29) {
        if (v92.yRuNI(v92.Kbgom, v92.bZKjY)) {
          return [];
        } else {
          console.log(v92.nccVi);
        }
      } else if (v30) {
        if (v92.xCqvb === v92.FgNoU) {
          const v102 = new v96("function *\\( *\\)");
          const v103 = new v97(TuZydP.tegoE, "i");
          const v104 = TuZydP.qlaIB(v98, TuZydP.uLyvT);
          if (!v102.test(TuZydP.sPBnB(v104, TuZydP.jiXSU)) || !v103.test(TuZydP.VfbuK(v104, TuZydP.tGTLT))) {
            TuZydP.qlaIB(v104, "0");
          } else {
            TuZydP.zNfcP(v100);
          }
        } else {
          console.log(v92.uFLux);
        }
      } else if (v31) {
        if (v92.YmEXw(v92.xQcaj, v92.xQcaj)) {
          v96.stdout.clearLine(0);
          v97.stdout.cursorTo(0);
          v98.stdout.write(v99 + " Stopped for not accumulating the defined minimum!");
        } else {
          console.log(v92.uFLux);
        }
      } else if (v92.YmEXw(v92.CGcOy, "JLFoI")) {
        console.log(v92.PQxPM);
      } else {
        return null;
      }
    } else {
      v96.stdout.clearLine(0);
      v97.stdout.cursorTo(0);
      v98.stdout.write(v99 + "  Check proxies...");
    }
  }
  console.log("\n");
  process.exit(0);
}
async function f7() {
  if (!v24) {
    process.stdout.moveCursor(0, -4);
    process.stdout.clearScreenDown();
    console.log(v21);
  }
  process.exit(0);
}
async function f8(p118 = null) {
  const v105 = {
    xSrQN: function (p119, p120) {
      return p119(p120);
    },
    CCeRU: function (p121, p122) {
      return p121 === p122;
    },
    WFKLF: function (p123, p124) {
      return p123 - p124;
    },
    RgSVp: "wyLcL",
    DMmRV: function (p125, p126) {
      return p125 === p126;
    },
    mwkFx: "RAMhu",
    tLYBp: "TwpSn",
    KjjHV: function (p127, p128) {
      return p127 !== p128;
    },
    ktDEe: "HfpPe",
    txXVR: function (p129, p130) {
      return p129(p130);
    },
    srNxK: "terminal-captcha",
    PJuTo: "zAucp",
    UphPp: function (p131, p132) {
      return p131(p132);
    },
    EAFyU: "vqwuQ",
    GSSlw: function (p133, p134) {
      return p133(p134);
    },
    uOtxf: "qqeBp",
    satlH: "xUifz",
    IoCRl: function (p135, p136) {
      return p135 !== p136;
    },
    Duqme: "QykEQ",
    UzxIc: "RSMTz",
    JdlGM: function (p137, p138) {
      return p137(p138);
    },
    pGLEX: function (p139, p140) {
      return p139(p140);
    },
    Oaqif: "lqwoH",
    BdODR: function (p141) {
      return p141();
    }
  };
  try {
    if (v105.CCeRU(v105.RgSVp, v105.RgSVp)) {
      if (!a0L.existsSync(v82)) {
        if (v105.DMmRV(v105.mwkFx, v105.tLYBp)) {
          v105.xSrQN(o, "Launch Zefoy in headless browser...");
        } else {
          if (!v72) {
            if (v105.KjjHV(v105.ktDEe, v105.ktDEe)) {
              p118 = v105;
            } else {
              v72 = await v105.txXVR(f35, v26);
            }
          }
          p118 = (await v72.pages())[0];
          const v106 = {
            timeout: 0
          };
          await p118.goto(v81, v106);
          await f50(3000);
          if (v105.DMmRV(vA0W[v105.srNxK], "")) {
            if (v105.KjjHV(v105.PJuTo, "zAucp")) {
              v105.log(p);
              v106.exit(0);
            } else {
              await v105.UphPp(f10, p118);
            }
          } else if (v105.KjjHV(v105.EAFyU, v105.EAFyU)) {
            v106.stdout.clearLine(0);
            w.stdout.cursorTo(0);
            A.stdout.write(c + " Wrong captcha! (" + D + ")");
          } else {
            await v105.GSSlw(f11, p118);
          }
        }
      }
      if (!p118) {
        if (v105.KjjHV(v105.uOtxf, v105.satlH)) {
          if (v72) {
            p118 = (await v72.pages())[0];
          } else if (v105.IoCRl(v105.Duqme, v105.UzxIc)) {
            v72 = await v105.JdlGM(f35, v26);
            p118 = (await v72.pages())[0];
          } else {
            p.stdout.moveCursor(0, -4);
            m.stdout.clearScreenDown();
            w.log(A);
          }
          await p118.goto(v81, {
            timeout: 0
          });
        } else if (v105.CCeRU(w, 0)) {
          y = Z;
        } else {
          r = v105.WFKLF(E, i);
        }
      }
      return await v105.pGLEX(f9, p118);
    } else {
      v105.xSrQN(o, "Chrome/Chromium executable is valid!");
    }
  } catch (Z) {
    if (v105.Oaqif !== "lqwoH") {
      p118.stdout.moveCursor(0, -2);
      v105.stdout.clearScreenDown();
    } else {
      await v105.BdODR(f28);
      await v105.GSSlw(f50, 1000);
      return await v105.BdODR(f8);
    }
  }
}
async function f9(p142) {
  const v108 = {
    YBPav: function (p143, p144) {
      return p143(p144);
    },
    HDLVm: function (p145, p146) {
      return p145 && p146;
    },
    GzhvB: function (p147, p148) {
      return p147 + p148;
    },
    vnGQO: "Executable not found in the following path:\n",
    OoaJR: "Use the -b flag to set the path to the browser.",
    hsfMv: function (p149) {
      return p149();
    },
    lvMwL: function (p150, p151) {
      return p150 / p151;
    },
    CySYv: function (p152) {
      return p152();
    },
    fRVro: function (p153, p154) {
      return p153 !== p154;
    },
    asmWZ: "SMwXl",
    AYTGk: function (p155, p156) {
      return p155(p156);
    },
    Heefm: function (p157) {
      return p157();
    },
    mZKgI: function (p158, p159) {
      return p158 && p159;
    },
    jFikK: "Dyrwt",
    xVFth: function (p160, p161) {
      return p160 === p161;
    },
    nHgDl: "zHsYD",
    eHeOF: function (p162, p163) {
      return p162(p163);
    },
    iFzAD: "VRovQ",
    ezxVk: "LoCGD",
    ykEjL: "CKpsi",
    IoghS: function (p164) {
      return p164();
    },
    nVVRf: function (p165, p166) {
      return p165 === p166;
    },
    UoURU: "deTBq",
    ScTYg: function (p167, p168) {
      return p167 === p168;
    },
    EUQRu: "terminal-captcha",
    IqNoz: "YZiyk",
    ejUfC: "clJlk",
    qBHnH: "seazC"
  };
  if (v108.HDLVm(!v24, !v27)) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(v53 + " Launch Zefoy in headless browser...");
  } else if (v108.fRVro(v108.asmWZ, "wCOWU")) {
    v108.YBPav(f51, "Launch Zefoy in headless browser...");
  } else {
    try {
      const v109 = v108.YBPav(v109, v110);
      const v110 = v109.text();
      const v111 = v110.match(/"liveRoomStats":\s*{\s*"userCount":\s*(\d+)/);
      if (v111) {
        const vI = vI(v111[1]);
        return vI;
      }
    } catch (y) {
      v108.YBPav(Z, y);
      return null;
    }
  }
  await v108.AYTGk(f50, 1000);
  const v112 = await v108.Heefm(f29);
  const v113 = v112.find(p169 => p169.name === "PHPSESSID");
  v70 = v113.value;
  if (v108.mZKgI(!v24, !v27)) {
    if (v108.fRVro(v108.jFikK, v108.jFikK)) {
      v114.stdout.clearLine(0);
      v115.stdout.cursorTo(0);
      A.stdout.write(c + " Launch " + D.provider + " in headless browser...");
    } else {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(v53 + " SESSID: " + v70);
    }
  } else if (v108.xVFth(v108.nHgDl, v108.nHgDl)) {
    v108.eHeOF(f51, "SESSID: " + v70);
  } else {
    return p142.task;
  }
  await v108.eHeOF(f50, 1000);
  await p142.setCookie(...v112);
  const v114 = {
    timeout: 0
  };
  await p142.goto(v81, v114);
  if (v108.HDLVm(!v24, !v27)) {
    if (v108.fRVro(v108.iFzAD, v108.iFzAD)) {
      v113.stdout.clearLine(0);
      v114.stdout.cursorTo(0);
      v115.stdout.write(A + " Bypassing Cloudflare...");
    } else {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(v54 + " Cookies injected! (" + v82 + ")");
    }
  } else {
    v108.YBPav(f51, "Cookies injected! (" + v82 + ")");
  }
  v108.AYTGk(f51, "Load session (SESSID: " + v70 + ")...");
  await v108.YBPav(f50, 3000);
  const v115 = await p142.content();
  if (/_cf_chl_opt/.test(v115)) {
    if (v108.fRVro(v108.ezxVk, v108.ykEjL)) {
      await v108.IoghS(f28);
      await f50(1000);
      await v108.CySYv(f41);
      return await v108.eHeOF(f9, p142);
    } else {
      if (v108.HDLVm(!K, !I)) {
        J.stdout.clearLine(0);
        X.stdout.cursorTo(0);
        Y.stdout.write(v108.GzhvB(P + " Chrome/Chromium executable is invalid!", " ".repeat(15)));
        N.info("\n\n", v108.vnGQO, "\"" + F + "\"\n", v108.OoaJR);
      } else {
        v108.YBPav(q, "Chrome/Chromium executable is invalid!");
      }
      d.exit(1);
    }
  }
  if (/submit-captcha/.test(v115)) {
    if (v108.nVVRf(v108.UoURU, "ZppIk")) {
      y.stdout.moveCursor(0, -3);
      Z.stdout.clearScreenDown();
      r.stdout.write("\n" + E + "[33m " + i + " [34m[" + b + "][0m " + z + "  [90m(" + v108.hsfMv(d) + " /hr " + v108.lvMwL(v108.CySYv(J), 60).toFixed(2) + " hrs)[0m\n\n");
      X.stdout.write(Y + " Running: Trying again (ERROR: " + P.substring(0, 24) + ")...");
    } else if (v108.ScTYg(vA0W[v108.EUQRu], "")) {
      if (v108.IqNoz === v108.ejUfC) {
        v108("Captcha resolved! (" + v112 + ")");
      } else {
        await v108.AYTGk(f10, p142);
      }
    } else if (v108.ScTYg(v108.qBHnH, "kRXlX")) {
      p142 = "";
    } else {
      await v108.YBPav(f11, p142);
    }
  }
  return p142;
}
async function f10(p170) {
  const v116 = {
    tjHbb: function (p171, p172) {
      return p171 !== p172;
    },
    cCwRj: "HpXgL",
    PUcib: "QDvcC",
    jGJyZ: function (p173, p174) {
      return p173 === p174;
    },
    WuJzR: "JbuJW",
    QPpRJ: "kfGAV",
    CHwlC: function (p175, p176) {
      return p175(p176);
    },
    xcTLH: function (p177, p178) {
      return p177(p178);
    },
    JNQpe: function (p179, p180) {
      return p179 - p180;
    },
    pVCcn: "AwNAc",
    hlcRe: "TiGKp",
    zLxxD: "input",
    aHdPo: "captcha",
    WizAs: "Write a Captcha:",
    cEzKt: "input[type=text]",
    XjFpN: "KEHoa",
    LzxRJ: "Iwfie",
    tyHJU: function (p181, p182) {
      return p181 || p182;
    },
    FOFuv: "eEJHA",
    GjXIZ: function (p183, p184) {
      return p183 === p184;
    },
    Teppy: "LTQWu",
    pfjUf: function (p185, p186) {
      return p185(p186);
    },
    ewmls: function (p187, p188) {
      return p187(p188);
    },
    GZoid: function (p189, p190) {
      return p189 !== p190;
    },
    KlLNm: "Vnjgi",
    KksYT: function (p191, p192) {
      return p191 !== p192;
    },
    SmFOz: "kxjrc",
    KWXDc: "xcwPn"
  };
  if (!v24) {
    if (v116.tjHbb(v116.cCwRj, v116.PUcib)) {
      process.stdout.cursorTo(0);
      process.stdout.write(v57 + " Solve the captcha manually...");
    } else {
      return false;
    }
  } else if (v116.jGJyZ(v116.WuJzR, v116.QPpRJ)) {
    v118.log("Cloudflare Valid / Zefoy Valid");
  } else {
    v116.CHwlC(f51, "Solve the captcha manually...");
  }
  await p170.evaluate("(() => {\n      const button = document.querySelector(\"button.fc-button.fc-cta-consent.fc-primary-button\");\n      if (button) {\n        button.click();\n      }\n    })();");
  await v116.xcTLH(f50, 1000);
  await p170.screenshot({
    path: v34,
    clip: {
      x: 255,
      y: 342,
      width: v116.JNQpe(274, 60),
      height: 126
    }
  });
  if (!v24) {
    if (v116.tjHbb(v116.pVCcn, v116.hlcRe)) {
      console.log("\n");
      console.log(await a0C.file(v34, {
        width: 64
      }));
    } else {
      v118.stdout.clearLine(0);
      v119.stdout.cursorTo(0);
      v120.stdout.write(v121 + " Check Zefoy accessibility...");
    }
  }
  const v118 = {
    type: v116.zLxxD,
    name: v116.aHdPo,
    message: v116.WizAs
  };
  const v119 = await a0g.prompt([v118]);
  const v120 = v119.captcha;
  await a0L.promises.unlink(v34);
  await p170.waitForSelector(v116.cEzKt);
  await p170.$eval(v116.cEzKt, (p193, p194) => p193.value = p194, v120);
  await p170.evaluate("(() => {\n      document\n        .querySelector(\"button.btn.btn-primary.btn-lg.btn-block\")\n        .click();\n    })();");
  if (!v24) {
    if (v116.XjFpN !== v116.LzxRJ) {
      process.stdout.moveCursor(0, v116.tyHJU(v30, v31) ? -22 : -23);
      process.stdout.clearScreenDown();
    } else {
      return v118;
    }
  }
  await p170.waitForNavigation();
  const v121 = v116.CHwlC(parseInt, await p170.evaluate("(() => {\n      return document.querySelector('#errorcapthcaclose') === null ? 1 : 0;\n    })();"));
  if (v121) {
    if (!v24) {
      if (v116.jGJyZ(v116.FOFuv, "POJFH")) {
        return false;
      } else {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write(v55 + " Captcha resolved! (" + v120 + ")");
      }
    } else if (v116.GjXIZ("BqEOC", v116.Teppy)) {
      return false;
    } else {
      v116.pfjUf(f51, "Captcha resolved! (" + v120 + ")");
    }
    const v122 = await p170.cookies();
    await f26(v122);
    await v116.ewmls(f50, 2000);
  } else if (v116.GZoid(v116.KlLNm, v116.KlLNm)) {
    p170 = "[32m+" + v116 + "[0m";
  } else {
    if (!v24) {
      if (v116.KksYT(v116.SmFOz, v116.SmFOz)) {
        v118.stdout.clearLine(0);
        v119.stdout.cursorTo(0);
        v120.stdout.write(v121 + " Zefoy is unreachable or blocked! :(");
      } else {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write(v56 + " Wrong captcha! (" + v120 + ")");
      }
    } else if (v116.GZoid(v116.KWXDc, "xcwPn")) {
      return null;
    } else {
      f51("Wrong captcha! (" + v120 + ")");
    }
    await v116.xcTLH(f50, 2000);
    await v116.pfjUf(f10, p170);
  }
}
async function f11(p195) {
  const v123 = {
    EzVgH: function (p196, p197) {
      return p196(p197);
    },
    OcWNp: function (p198, p199) {
      return p198 < p199;
    },
    qsFpn: function (p200, p201) {
      return p200(p201);
    },
    gogam: function (p202, p203) {
      return p202(p203);
    },
    XiuRZ: function (p204, p205) {
      return p204(p205);
    },
    aVySS: function (p206, p207) {
      return p206 && p207;
    },
    xILOc: " Solve captcha automatically...",
    MTmhJ: "dhoqx",
    OUCYq: function (p208, p209) {
      return p208(p209);
    },
    ivPvr: function (p210, p211) {
      return p210 + p211;
    },
    bkCBG: function (p212, p213) {
      return p212 - p213;
    },
    BvfmD: function (p214, p215) {
      return p214(p215);
    },
    sqVsb: "input[type=text]",
    aUEFE: function (p216, p217) {
      return p216(p217);
    },
    Pmdwm: function (p218, p219) {
      return p218 === p219;
    },
    fkHzk: "bPQVK",
    bLHSk: "FrXQJ",
    YzXET: function (p220, p221) {
      return p220 === p221;
    },
    ALRKo: "JNcCT",
    gnUBW: "jrSUV",
    VDFfB: "IoYqG",
    daFil: function (p222, p223) {
      return p222(p223);
    },
    PEBhf: function (p224, p225) {
      return p224 === p225;
    },
    CWcas: "CexGx",
    yHzar: "HdOwU",
    hxwGt: "oxzQA",
    ZniHO: "tteGj",
    YsMlr: "nXnwj",
    iKLnc: function (p226, p227) {
      return p226(p227);
    }
  };
  const v124 = Math.random().toString(36).substring(2, 10) + "-";
  if (v123.aVySS(!v24, !v27)) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(v60 + v123.xILOc);
  } else if (v123.MTmhJ === v123.MTmhJ) {
    v123.gogam(f51, "Solve captcha automatically...");
  } else if (v125) {
    return w;
  } else {
    qOXxtZ.EzVgH(A, 0);
  }
  await p195.evaluate("(() => {\n      const button = document.querySelector(\"button.fc-button.fc-cta-consent.fc-primary-button\");\n      if (button) {\n        button.click();\n      }\n    })();");
  await v123.OUCYq(f50, 1000);
  await p195.screenshot({
    path: v123.ivPvr(v124, v34),
    clip: {
      x: 255,
      y: 342,
      width: v123.bkCBG(274, 60),
      height: 126
    }
  });
  await v123.EzVgH(f50, 200);
  const v125 = await v123.BvfmD(f60, (await v123.qsFpn(f12, v124 + v34)).replace(/(\r\n|\n|\r| )/gm, ""));
  await a0L.promises.unlink(v123.ivPvr(v124, v34));
  await p195.waitForSelector("input[type=text]");
  await p195.$eval(v123.sqVsb, (p228, p229) => p228.value = p229, v125);
  await p195.evaluate("(() => {\n      document\n        .querySelector(\"button.btn.btn-primary.btn-lg.btn-block\")\n        .click();\n    })();");
  await p195.waitForNavigation();
  const v126 = v123.aUEFE(parseInt, await p195.evaluate("(() => {\n      return document.querySelector('#errorcapthcaclose') === null ? 1 : 0;\n    })();"));
  if (v126) {
    if (v123.Pmdwm(v123.fkHzk, v123.bLHSk)) {
      return null;
    } else {
      if (v123.aVySS(!v24, !v27)) {
        if (v123.YzXET("JNcCT", v123.ALRKo)) {
          process.stdout.clearLine(0);
          process.stdout.cursorTo(0);
          process.stdout.write(v55 + " Captcha resolved! (" + v125 + ")");
        } else {
          return v123.map(p230 => {
            let v127 = "";
            for (let v128 = 0; v123.OcWNp(v128, p230.length); v128 += 2) {
              v127 += p230[v128];
            }
            return v127.split("").reverse().join("");
          });
        }
      } else if (v123.YzXET(v123.gnUBW, v123.VDFfB)) {
        v123.log("Cloudflare Expired / Freer Expired");
        return false;
      } else {
        v123.qsFpn(f51, "Captcha resolved! (" + v125 + ")");
      }
      const v129 = await p195.cookies();
      await f26(v129);
      await v123.daFil(f50, 2000);
    }
  } else if (v123.PEBhf(v123.CWcas, v123.yHzar)) {
    v123.log("Cloudflare Valid / Zefoy Expired");
  } else {
    if (v123.aVySS(!v24, !v27)) {
      if (v123.hxwGt !== v123.hxwGt) {
        const [, v130, v131, v132, v133, v134, v135, v136] = c;
        return {
          followerCount: v123.qsFpn(D, v130),
          followingCount: K(v131),
          heart: v123.qsFpn(I, v132),
          heartCount: v123.EzVgH(v130, v133),
          videoCount: v123.gogam(v131, v134),
          diggCount: v123.qsFpn(v132, v135),
          friendCount: v123.XiuRZ(v133, v136)
        };
      } else {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write(v56 + " Wrong captcha! (" + v125 + ")");
      }
    } else if (v123.Pmdwm(v123.ZniHO, v123.YsMlr)) {
      m.stdout.clearLine(0);
      w.stdout.cursorTo(0);
      A.stdout.write(c + " Wrong captcha! (" + D + ")");
    } else {
      v123.gogam(f51, "Wrong captcha! (" + v125 + ")");
    }
    await v123.OUCYq(f50, 2000);
    await v123.iKLnc(f11, p195);
  }
}
async function f12(p231) {
  const v137 = {
    qOJVc: function (p232, p233) {
      return p232 - p233;
    },
    OjORi: function (p234, p235) {
      return p234 === p235;
    },
    LagXN: "Asdaz",
    XKJuF: "TQteH",
    yXgCr: function (p236, p237) {
      return p236(p237);
    },
    XxVUX: "MYGkj",
    eVwAb: "gYjYT",
    INZqE: "eng"
  };
  return new Promise((p238, p239) => {
    const v138 = {
      mOoTG: function (p240, p241) {
        return v137.qOJVc(p240, p241);
      },
      woSkl: function (p242, p243) {
        return v137.OjORi(p242, p243);
      },
      ojDcv: v137.LagXN,
      rfdPS: v137.XKJuF,
      MLyiA: function (p244, p245) {
        return v137.yXgCr(p244, p245);
      }
    };
    if (v137.OjORi(v137.XxVUX, v137.eVwAb)) {
      p239 = v138.mOoTG(v138, m);
    } else {
      a0V.recognize(p231, v137.INZqE).then(({
        data: {
          text: w
        }
      }) => {
        if (v138.woSkl(v138.ojDcv, v138.rfdPS)) {
          m.stdout.clearLine(0);
          w.stdout.cursorTo(0);
          A.stdout.write(c + " SESSID: " + D);
        } else {
          v138.MLyiA(p238, w);
        }
      });
    }
  });
}
async function f13() {
  const v139 = {
    taWPk: "--disable-gpu",
    RBwWZ: function (p246, p247) {
      return p246 === p247;
    },
    HFpgS: "OyZlp",
    kQzmg: function (p248, p249) {
      return p248 === p249;
    },
    vEPYw: "Zefoy",
    hJzvd: "Zefoy Tasks",
    dbwVX: function (p250, p251) {
      return p250 === p251;
    },
    QWOVF: "XWkmY",
    iFtwX: "UQyQe",
    cjIBt: function (p252) {
      return p252();
    },
    CqNhV: "list",
    xrAuy: "Choose an option",
    UWNTe: "Freer Tasks",
    HeMzh: "License (VERIFIED)",
    bGghS: "Updates",
    doOXD: "Help",
    rROUX: "Exit"
  };
  if (vA0W.task) {
    if (v139.RBwWZ(v139.HFpgS, v139.HFpgS)) {
      if (v139.kQzmg(vA0W.provider, v139.vEPYw)) {
        return v139.hJzvd;
      } else {
        return "Freer Tasks";
      }
    } else {
      f = [...u, v139.taWPk, "--disable-gpu-compositing"];
    }
  } else if (v139.dbwVX(v139.QWOVF, v139.iFtwX)) {
    return null;
  } else {
    const v140 = vA0f0.includes(await v139.cjIBt(f33));
    const v141 = {
      type: v139.CqNhV,
      name: "menu",
      message: v139.xrAuy,
      choices: [{
        name: v139.hJzvd
      }, {
        name: v139.UWNTe
      }, {
        name: v140 ? v139.HeMzh : "License"
      }, {
        name: v139.bGghS
      }, {
        name: v139.doOXD
      }, {
        name: v139.rROUX
      }]
    };
    const v142 = await a0g.prompt([v141]);
    return v142.menu;
  }
}
async function f14() {
  const v143 = {
    vRpCX: function (p253) {
      return p253();
    },
    tzuCF: function (p254, p255) {
      return p254 / p255;
    },
    ZlHOb: function (p256) {
      return p256();
    },
    dWKLf: function (p257, p258) {
      return p257(p258);
    },
    tSKcZ: function (p259, p260) {
      return p259(p260);
    },
    cCdhc: "./ubuntu-update.sh",
    ksiqc: function (p261) {
      return p261();
    },
    oaPsX: function (p262, p263) {
      return p262 === p263;
    },
    DfUOu: "wBWtX",
    GrzSN: function (p264, p265) {
      return p264 !== p265;
    },
    dpSgW: "lbikf",
    lwjLJ: function (p266, p267) {
      return p266 + p267;
    },
    xtqVR: "mjKhZ",
    rYRhF: "JafuH",
    cRQCh: "You are using the FREE version limited to ~5000\n",
    lFXzs: "accumulations. The advantage of acquiring the\n",
    OmBFt: "license is that the bot continues to work\n",
    miIJo: "indefinitely and accumulates large amounts.\n",
    omrPm: "list",
    aolpl: "choice",
    lNylz: "Do you want unlock this limitation?",
    seZTy: "Add License Key",
    swaQA: "Back",
    SfWwH: function (p268, p269) {
      return p268 === p269;
    },
    PXkTE: function (p270, p271) {
      return p270 === p271;
    },
    OCjIA: "stsyE",
    vIMaF: function (p272, p273) {
      return p272 !== p273;
    },
    PvQMT: "xAMde",
    UnCNw: "ObBGX",
    LYlkL: function (p274) {
      return p274();
    },
    MblZE: function (p275, p276) {
      return p275 === p276;
    },
    DgVjV: function (p277, p278) {
      return p277 !== p278;
    },
    UnbBh: "zPkhF",
    tpxlG: "PnaxT",
    wNDib: function (p279, p280) {
      return p279 === p280;
    },
    oHCye: "ZPKAN",
    hFRrw: function (p281) {
      return p281();
    }
  };
  if (vA0f0.includes(await v143.ksiqc(f33))) {
    if (v143.oaPsX(v143.DfUOu, v143.DfUOu)) {
      if (!v24) {
        if (v143.GrzSN(v143.dpSgW, "lbikf")) {
          u.stdout.moveCursor(0, -3);
          p.stdout.cursorTo(0);
          m.stdout.clearScreenDown();
        } else {
          process.stdout.clearLine(0);
          process.stdout.cursorTo(0);
          process.stdout.write(v143.lwjLJ(v55, " LICENSE IS VERIFIED!"));
        }
      }
    } else {
      y.stdout.moveCursor(0, -3);
      Z.stdout.clearScreenDown();
      r.stdout.write("\n" + E + "[33m " + i + " [34m[" + b + "][0m " + z + "  [90m(" + v143.vRpCX(d) + " /hr " + v143.tzuCF(v143.ZlHOb(J), 60).toFixed(2) + " hrs)[0m\n\n");
      X.stdout.write(Y + " Running: Trying again (ERROR: " + P.substring(0, 24) + ")...");
    }
  } else if (v143.GrzSN(v143.xtqVR, v143.rYRhF)) {
    console.info("\n", v143.cRQCh, v143.lFXzs, v143.OmBFt, v143.miIJo, v59 + " Buy license in[35m " + v47 + "[0m\n");
    const v144 = {
      type: v143.omrPm,
      name: v143.aolpl,
      message: v143.lNylz,
      choices: [{
        name: v143.seZTy
      }, {
        name: v143.swaQA
      }]
    };
    const v145 = await a0g.prompt([v144]);
    if (v143.SfWwH(v145.choice, v143.seZTy)) {
      if (v143.PXkTE("ybPmp", v143.OCjIA)) {
        v143.dWKLf(y, "[" + Z + "] " + r + " (+" + E + ") [" + i + "] Stopped for reaching the maximum time limit! (in " + v143.ZlHOb(b) + " mins)");
        if (!z) {
          N.stdout.clearLine(0);
          F.stdout.cursorTo(0);
          q.stdout.write(R + " Stopped for reaching the maximum time limit!");
        }
        P.exit(0);
      } else {
        if (!v24) {
          if (v143.vIMaF(v143.PvQMT, v143.UnCNw)) {
            process.stdout.moveCursor(0, -1);
            process.stdout.clearScreenDown();
          } else {
            v143.tSKcZ(v143, "Do not use proxy!");
          }
        }
        return await v143.LYlkL(f15);
      }
    }
    if (v143.MblZE(await v145.choice, v143.swaQA)) {
      if (v143.DgVjV(v143.UnbBh, v143.tpxlG)) {
        if (!v24) {
          if (v143.wNDib("ZPKAN", v143.oHCye)) {
            process.stdout.moveCursor(0, -9);
            process.stdout.clearScreenDown();
          } else {
            const v146 = u.apply(v144, arguments);
            v145 = null;
            return v146;
          }
        }
        await v143.hFRrw(f2);
      } else {
        return [];
      }
    }
  } else {
    v143.log(v143.cCdhc);
  }
}
async function f15() {
  const v147 = {
    PHkGr: "input",
    MZrPe: "license",
    jHVPU: "Paste your License Key here:",
    uzIFi: function (p282, p283) {
      return p282(p283);
    },
    HyFJp: function (p284, p285) {
      return p284 === p285;
    },
    INbos: "ukmIk",
    znXbE: "iEwiR",
    PTbUS: function (p286) {
      return p286();
    }
  };
  const v148 = {
    type: v147.PHkGr,
    name: v147.MZrPe,
    message: v147.jHVPU
  };
  const v149 = await a0g.prompt([v148]);
  const v150 = v149.license;
  await v147.uzIFi(f32, v150);
  if (!v24) {
    if (v147.HyFJp(v147.INbos, v147.znXbE)) {
      v148.log(v149);
    } else {
      process.stdout.moveCursor(0, -9);
      process.stdout.clearScreenDown();
    }
  }
  await v147.PTbUS(f2);
}
async function f16(p287) {
  const v151 = {
    lrThf: function (p288, p289) {
      return p288(p289);
    },
    YGUpf: function (p290) {
      return p290();
    },
    XctfZ: function (p291, p292) {
      return p291 / p292;
    },
    uIlgh: function (p293) {
      return p293();
    },
    KULKD: function (p294, p295) {
      return p294(p295);
    },
    sitXO: function (p296, p297) {
      return p296 === p297;
    },
    IJdZD: "Up ",
    xwVzd: "eIKZz",
    SeCkz: "XVlSm",
    Zqozv: "Back",
    Brrwy: function (p298, p299) {
      return p298 === p299;
    },
    zzNaJ: "ERjno",
    Soeip: function (p300, p301) {
      return p300 === p301;
    },
    AKVfx: "ZJLGt",
    kLdmq: "slSbR",
    KMLvg: "list",
    ewBze: "mode",
    xNtSF: "What task do you want me to do?",
    ykyQV: function (p302, p303) {
      return p302 === p303;
    },
    uigLf: function (p304, p305) {
      return p304 !== p305;
    },
    UsXIs: "qEUQM",
    jOtgM: "ttEuN",
    uViLk: function (p306, p307) {
      return p306 === p307;
    },
    YFaxx: "tuuZf"
  };
  let v152 = await p287.evaluate("(() => {\n      let choices = Array.from(document.querySelectorAll(\".card-body\"));\n      choices = choices.map((c) => {\n        const parts = c.innerText.replace(" + /(\r\n|\n|\r)/gm + ", \" \").split(\"  \");\n        return {\n          name: 'Up ' + parts[0],\n          disabled:" + /soon/ + ".test(parts[1]) ? true : false,\n        };\n      });\n      return choices.filter((c) => !c.disabled);\n    })();");
  if (v151.sitXO(v152[0].name, v151.IJdZD)) {
    if (v151.xwVzd !== v151.SeCkz) {
      return false;
    } else {
      v151.lrThf(p287, v151);
      return null;
    }
  }
  const v153 = {
    name: v151.Zqozv
  };
  v152.push(v153);
  if (!v24) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
  }
  if (vA0W.task) {
    if (v151.Brrwy(v151.zzNaJ, v151.zzNaJ)) {
      return vA0W.task;
    } else {
      y.stdout.moveCursor(0, -3);
      Z.stdout.clearScreenDown();
      r.stdout.write("\n" + E + "[33m " + i + " [34m[" + b + "][0m " + z + "  [90m(" + v151.YGUpf(d) + " /hr " + v151.XctfZ(v151.uIlgh(J), 60).toFixed(2) + " hrs)[0m\n\n");
      X.stdout.write(Y + " Running: " + P.substring(0, 43));
    }
  } else if (v151.Soeip(v151.AKVfx, v151.kLdmq)) {
    v151.lrThf(p287, "SESSID: " + v151);
  } else {
    const v154 = {
      type: v151.KMLvg,
      name: v151.ewBze,
      message: v151.xNtSF,
      choices: v152
    };
    const v155 = await a0g.prompt([v154]);
    if (v151.ykyQV(await v155.mode, v151.Zqozv)) {
      if (v151.uigLf(v151.UsXIs, v151.jOtgM)) {
        if (!v24) {
          if (v151.uViLk("pcnYA", v151.YFaxx)) {
            p287 = v151.concat;
          } else {
            process.stdout.moveCursor(0, -2);
            process.stdout.clearScreenDown();
          }
        }
        await v151.YGUpf(f2);
      } else {
        v151.KULKD(p287, "Wrong captcha! (" + v151 + ")");
      }
    }
    return v155.mode;
  }
}
async function f17() {
  const v156 = {
    yggFC: function (p308, p309) {
      return p308(p309);
    },
    XlOiH: function (p310, p311) {
      return p310(p311);
    },
    AINSj: function (p312, p313) {
      return p312 !== p313;
    },
    etoqe: "DuoXp",
    Kuwia: "qvliK",
    Ybbmk: function (p314) {
      return p314();
    },
    xCxSQ: "mDWJg",
    QlcbO: function (p315, p316) {
      return p315(p316);
    },
    ldMhw: function (p317, p318) {
      return p317 === p318;
    },
    eGstn: "KLRcd",
    uUNYF: function (p319, p320) {
      return p319 !== p320;
    },
    SsDdJ: "GpUpC",
    zYJBI: "Recent Videos",
    wvqcs: "New Video",
    vcJkg: "Back",
    aryuU: "list",
    RmxJh: "choice",
    EaLaw: "Would you like to select a recent video?",
    RTruq: function (p321, p322) {
      return p321 === p322;
    },
    CkOXX: "tTPYD",
    hcpes: "AsTDy",
    svczn: function (p323, p324) {
      return p323 === p324;
    }
  };
  if (vA0W.video) {
    if (v156.AINSj(v156.etoqe, v156.Kuwia)) {
      let v157 = await v156.Ybbmk(f31);
      if (!v157.some(p325 => p325.url === vA0W.video)) {
        if (v156.AINSj(v156.xCxSQ, v156.xCxSQ)) {
          v156.yggFC(f, u);
        } else {
          v157.push({
            url: vA0W.video,
            timestamp: new Date().getTime()
          });
          await v156.QlcbO(f30, v157);
        }
      }
      if (!v24) {
        if (v156.ldMhw(v156.eGstn, v156.eGstn)) {
          console.log("Video:[36m " + vA0W.video + " [0m");
        } else {
          if (!w) {
            y.stdout.moveCursor(0, -4);
            Z.stdout.clearScreenDown();
            r.log(E);
          }
          I.exit(0);
        }
      }
      return vA0W.video;
    } else {
      const v158 = {
        name: o.url
      };
      return v158;
    }
  } else if (v156.uUNYF(v156.SsDdJ, v156.SsDdJ)) {
    v156.yggFC(f, "Cookies injected! (" + u + ")");
  } else {
    const v159 = {
      name: v156.zYJBI
    };
    const v160 = {
      name: v156.wvqcs
    };
    const v161 = {
      name: v156.vcJkg
    };
    const v162 = [v159, v160, v161];
    const v163 = {
      type: v156.aryuU,
      name: v156.RmxJh,
      message: v156.EaLaw,
      choices: v162
    };
    const v164 = await a0g.prompt([v163]);
    if (v156.RTruq(v164.choice, "Recent Videos")) {
      if (v156.RTruq(v156.CkOXX, "tTPYD")) {
        return await f18();
      } else {
        v156.XlOiH(m, "[" + w + "] " + A + " (+" + c + ") " + D);
      }
    }
    if (v156.RTruq(await v164.choice, v156.vcJkg)) {
      if (v156.uUNYF(v156.hcpes, "CpgZf")) {
        if (!v24) {
          if (v156.svczn("XFsVd", "XFsVd")) {
            process.stdout.moveCursor(0, -3);
            process.stdout.clearScreenDown();
          } else {
            v163.stdout.cursorTo(0);
            v156.stdout.write(m + " Solve the captcha manually...");
          }
        }
        await v156.Ybbmk(f2);
      } else {
        v161.stdout.moveCursor(0, -2);
        v163.stdout.clearScreenDown();
      }
    }
    return await v156.Ybbmk(f19);
  }
}
async function f18() {
  const v165 = {
    RrITS: function (p326) {
      return p326();
    },
    ujuSk: "Back",
    oefmE: "list",
    FfYlS: "url",
    MpvgB: "Select a video from the history",
    RKWGE: function (p327, p328) {
      return p327 === p328;
    },
    UvUqQ: "EPRnw",
    IIUqC: function (p329, p330) {
      return p329 !== p330;
    },
    mqwYK: "aUndU",
    Msfux: "sAigM",
    HGMaM: function (p331) {
      return p331();
    }
  };
  let v166 = await v165.RrITS(f31);
  v166 = v166.map(p332 => {
    const v167 = {
      name: p332.url
    };
    return v167;
  });
  const v168 = {
    name: v165.ujuSk
  };
  v166.push(v168);
  const v169 = {
    type: v165.oefmE,
    name: v165.FfYlS,
    message: v165.MpvgB,
    choices: v166
  };
  const v170 = await a0g.prompt([v169]);
  if (v165.RKWGE(await v170.url, "Back")) {
    if (v165.RKWGE(v165.UvUqQ, v165.UvUqQ)) {
      if (!v24) {
        if (v165.IIUqC(v165.mqwYK, v165.Msfux)) {
          process.stdout.moveCursor(0, -2);
          process.stdout.clearScreenDown();
        } else {
          v166.stdout.cursorTo(0);
          v168.stdout.write(v169 + " Solve the captcha manually...");
        }
      }
      return await v165.HGMaM(f17);
    } else {
      v169.stdout.clearLine(0);
      v170.stdout.cursorTo(0);
      A.stdout.write(c + " Wrong captcha! (" + D + ")");
    }
  }
  return v170.url;
}
async function f19() {
  const v171 = {
    DWBWN: "input",
    BWCwI: "url",
    OfFNq: function (p333) {
      return p333();
    },
    XiPeI: function (p334, p335) {
      return p334(p335);
    }
  };
  const v172 = {
    type: v171.DWBWN,
    name: v171.BWCwI,
    message: "What is the URL of your Tiktok video?"
  };
  const v173 = await a0g.prompt([v172]);
  const v174 = v173.url;
  let v175 = await v171.OfFNq(f31);
  if (!v175.some(p336 => p336.url === v174)) {
    v175.push({
      url: v174,
      timestamp: new Date().getTime()
    });
    await v171.XiPeI(f30, v175);
  }
  return v174;
}
function f20(p337) {
  const v176 = {
    EHxIK: function (p338, p339) {
      return p338 !== p339;
    },
    qBSSX: "gLsdQ",
    ZusCH: function (p340, p341) {
      return p340(p341);
    }
  };
  const v177 = /@(\w+)\n(.+)\n(\d+\s\w+\sago)\n([\d|\,]+)/g;
  const v178 = [...p337.matchAll(v177)];
  return v178.map(p342 => {
    if (v176.EHxIK(v176.qBSSX, "sPniL")) {
      return {
        username: p342[1],
        comment: p342[2],
        timestamp: p342[3],
        likes: v176.ZusCH(parseInt, p342[4].replace(/[,\.]/g, "")),
        concat: "@" + p342[1] + " \"" + p342[2].substring(0, 10) + "...\" " + p342[3] + " (" + p342[4] + ")"
      };
    } else {
      v177 = "Extracting comments (" + v178.length + ")...";
    }
  });
}
async function f21(p343) {
  const v179 = {
    BBJmx: function (p344, p345) {
      return p344 === p345;
    },
    JNQnJ: "AybLZ",
    eDlQY: function (p346, p347) {
      return p346 === p347;
    },
    DswSV: "Zefoy",
    YpncX: "Zefoy Tasks",
    mqvpS: "Freer Tasks",
    sieMl: "Back",
    LTEoH: "list",
    MGGTV: "concat",
    Wrkue: "Select a comment",
    WnHVb: function (p348, p349) {
      return p348 === p349;
    },
    WgACC: function (p350, p351) {
      return p350 !== p351;
    },
    tHZOu: "GIZRZ",
    ITPrA: "JfIgq",
    evSmn: function (p352) {
      return p352();
    }
  };
  let v180 = p343.map(p353 => {
    if (v179.BBJmx(v179.JNQnJ, v179.JNQnJ)) {
      const v181 = {
        name: p353.concat
      };
      return v181;
    } else {
      v180.stdout.clearLine(0);
      v182.stdout.cursorTo(0);
      v183.stdout.write(v184 + " Zefoy is protected by UAM Cloudflare!");
    }
  });
  const v182 = {
    name: v179.sieMl
  };
  v180.push(v182);
  const v183 = {
    type: v179.LTEoH,
    name: v179.MGGTV,
    message: v179.Wrkue,
    choices: v180
  };
  const v184 = await a0g.prompt([v183]);
  if (v179.WnHVb(await v184.concat, v179.sieMl)) {
    if (v179.WgACC(v179.tHZOu, v179.tHZOu)) {
      return new v179(p354 => v183(p354, v184));
    } else {
      if (!v24) {
        if (v179.ITPrA !== v179.ITPrA) {
          if (v179.eDlQY(v183.provider, v179.DswSV)) {
            return v179.YpncX;
          } else {
            return v179.mqvpS;
          }
        } else {
          process.stdout.moveCursor(0, -6);
          process.stdout.clearScreenDown();
        }
      }
      await v179.evSmn(f2);
    }
  }
  return v180.findIndex(p355 => p355.name === v184.concat);
}
async function f22(p356, p357, p358, p359 = false) {
  const v185 = {
    GGueS: function (p360) {
      return p360();
    },
    OnWji: function (p361, p362) {
      return p361 / p362;
    },
    tEnUa: "while (true) {}",
    wSXhh: "counter",
    ewjQA: function (p363, p364) {
      return p363 === p364;
    },
    ZjMqU: "dIdWg",
    quTsE: ".t-followers-button",
    JCpsI: ".t-followers-menu",
    XPcPr: "Up Hearts",
    PghtF: ".t-hearts-menu",
    GToFH: "Up Comments Hearts",
    rtPSf: ".t-chearts-button",
    guNkO: ".t-chearts-menu",
    pXMFN: "Up Views",
    edTzu: ".t-views-button",
    MFcDG: ".t-views-menu",
    HpHVK: "Up Shares",
    TKNXz: ".t-shares-button",
    WfPtS: ".t-shares-menu",
    eIJbe: "Up Favorites",
    uRovQ: ".t-favorites-button",
    JImev: ".t-favorites-menu",
    GpeMn: "Up Livestream [VS+LIKES]",
    tDIoU: ".t-livestream-button",
    QgaeO: ".t-livestream-menu",
    QLXiY: function (p365, p366) {
      return p365 === p366;
    },
    Nzfhw: "pRCyv",
    IcEhP: "VXIxH",
    GsvgN: function (p367, p368) {
      return p367 && p368;
    },
    YAuPw: "xSOha",
    WRPaK: "gPOnn",
    QhCPJ: function (p369, p370) {
      return p369(p370);
    },
    AbQqV: function (p371, p372, p373, p374, p375) {
      return p371(p372, p373, p374, p375);
    },
    XHhwj: function (p376, p377, p378) {
      return p376(p377, p378);
    },
    ksfNw: function (p379, p380, p381, p382, p383) {
      return p379(p380, p381, p382, p383);
    },
    VQfAg: function (p384, p385) {
      return p384 !== p385;
    },
    lxyvU: "hxxzZ",
    wdXpv: "reNsO",
    tkQnQ: "2|1|5|3|4|6|0",
    aAlTa: function (p386) {
      return p386();
    },
    ihhUT: function (p387, p388) {
      return p387(p388);
    },
    SCvHW: function (p389, p390) {
      return p389(p390);
    },
    AJTTm: function (p391, p392, p393, p394, p395) {
      return p391(p392, p393, p394, p395);
    }
  };
  try {
    if (v185.ewjQA(v185.ZjMqU, v185.ZjMqU)) {
      v63 = v63 || process.hrtime();
      const v186 = new Map([["Up Followers", [v185.quTsE, v185.JCpsI]], [v185.XPcPr, [".t-hearts-button", v185.PghtF]], [v185.GToFH, [v185.rtPSf, v185.guNkO]], [v185.pXMFN, [v185.edTzu, v185.MFcDG]], [v185.HpHVK, [v185.TKNXz, v185.WfPtS]], [v185.eIJbe, [v185.uRovQ, v185.JImev]], [v185.GpeMn, [v185.tDIoU, v185.QgaeO]]]);
      let v189 = v185.edTzu;
      let v190 = v185.MFcDG;
      if (v186.has(p356)) {
        if (v185.QLXiY(v185.Nzfhw, v185.IcEhP)) {
          y.stdout.moveCursor(0, -3);
          Z.stdout.clearScreenDown();
          r.stdout.write("\n" + E + "[33m " + i + " [34m[" + b + "][0m " + z + "  [90m(" + v185.GGueS(d) + " /hr " + v185.OnWji(v185.GGueS(J), 60).toFixed(2) + " hrs)[0m\n\n");
          X.stdout.write(Y + " Running: " + P.substring(0, 43));
        } else {
          [v189, v190] = v186.get(p356);
        }
      }
      await p358.evaluate("(() => {\n        document.querySelector(\"" + v189 + "\").click();\n      })();");
      await p358.waitForSelector(v190);
      await p358.$eval(v190 + " > div > form > div > input", (p396, p397) => p396.value = p397, p357);
      await p358.evaluate("(() => {\n        document\n          .querySelector(\"" + v190 + " > div > form > div > div > button\")\n          .click();\n      })();");
      if (v185.GsvgN(!p359, !v24)) {
        if (v185.QLXiY(v185.YAuPw, v185.WRPaK)) {
          return null;
        } else {
          console.log("\n\n");
        }
      }
      v185.QhCPJ(f51, p356 + " task running...");
      v64 = await v185.AbQqV(f24, p358, v190, p356, p357);
      v65 = await v185.XHhwj(f25, p358, v190);
      v66 = await v185.ksfNw(f23, p358, v190, p356, p357);
    } else {
      return function (p398) {}.constructor(kNXTmD.tEnUa).apply(kNXTmD.wSXhh);
    }
  } catch (y) {
    if (v185.VQfAg(v185.lxyvU, v185.wdXpv)) {
      const v191 = v185.tkQnQ.split("|");
      let v192 = 0;
      while (true) {
        switch (v191[v192++]) {
          case "0":
            return;
          case "1":
            await v185.aAlTa(f28);
            continue;
          case "2":
            v185.ihhUT(f51, y);
            continue;
          case "3":
            p358 = await v185.SCvHW(f8, p358);
            continue;
          case "4":
            await p358.goto(v81, {
              timeout: 0
            });
            continue;
          case "5":
            await v185.QhCPJ(f50, 2000);
            continue;
          case "6":
            v185.AJTTm(f22, p356, p357, p358, true);
            continue;
        }
        break;
      }
    } else {
      p357.stdout.moveCursor(0, -1);
      p358.stdout.clearScreenDown();
    }
  }
}
async function f23(p399, p400, p401, p402) {
  const v194 = {
    cMwXf: function (p403, p404) {
      return p403(p404);
    },
    WvEjE: function (p405, p406) {
      return p405(p406);
    },
    AGVvW: function (p407) {
      return p407();
    },
    koUQg: "Error processing image:",
    dNYue: "[36m",
    iHevW: "[0m",
    slLYr: function (p408, p409) {
      return p408 !== p409;
    },
    nILUS: "QlSrn",
    jpLnc: "XccPu",
    UFxZF: "zAnJY",
    kzsRO: function (p410, p411) {
      return p410(p411);
    },
    nzNJf: function (p412, p413) {
      return p412 > p413;
    },
    wDLez: "SQajP",
    gJQYD: "fDPIn",
    wtlDB: "oHlTo",
    IGBUZ: "UAVrf",
    uIdJO: function (p414, p415) {
      return p414 !== p415;
    },
    HGjAb: "zBXeW",
    MYSXJ: "QPIgm",
    jbvtB: function (p416) {
      return p416();
    },
    ugvPL: "JRBhg",
    ybqKd: "gksRQ",
    rwrja: function (p417, p418) {
      return p417 === p418;
    },
    RUnFr: "RzlKq",
    kGtbD: "zcCgq",
    jitDb: function (p419, p420) {
      return p419 / p420;
    },
    hiYNr: function (p421) {
      return p421();
    },
    IVINq: function (p422, p423) {
      return p422(p423);
    },
    GXVcx: function (p424, p425) {
      return p424(p425);
    },
    ydUYz: function (p426, p427) {
      return p426 * p427;
    },
    rWMeB: function (p428, p429) {
      return p428 * p429;
    },
    SWoHw: function (p430, p431) {
      return p430 === p431;
    },
    VxsEU: "Hjoum",
    VSHFm: function (p432) {
      return p432();
    },
    Tncat: function (p433, p434) {
      return p433(p434);
    },
    cwUKv: function (p435, p436, p437, p438, p439) {
      return p435(p436, p437, p438, p439);
    },
    iJksn: function (p440, p441, p442) {
      return p440(p441, p442);
    }
  };
  return v194.iJksn(setInterval, async () => {
    const v195 = {
      lRrKK: v194.koUQg,
      rJtte: v194.dNYue,
      tEndS: v194.iHevW,
      RjHGC: function (p443, p444) {
        return v194.cMwXf(p443, p444);
      }
    };
    if (v194.slLYr(v194.nILUS, v194.nILUS)) {
      y("[" + Z + "] " + r + " (+" + E + ") [" + i + "] Accumulation limit reached! (in " + b() + " mins)");
      if (!z) {
        N.stdout.clearLine(0);
        F.stdout.cursorTo(0);
        q.stdout.write(R + " Accumulation limit reached!");
      }
      P.exit(0);
    } else {
      let v196 = await p399.evaluate("(() => {\n        return document.querySelector(\"" + p400 + " > div > div\").innerText;\n      })();");
      v196 = v196.replace(/(\r\n|\n|\r)/gm, " ");
      if (/limit/.test(v196) || /error/.test(v196) || /not working/.test(v196) || /valid video/.test(v196) || /again later/.test(v196) || /error/.test(v196) || /expired/.test(v196) || /many requests/.test(v196) || /found/.test(v196)) {
        if (v194.slLYr(v194.jpLnc, v194.UFxZF)) {
          v194.cMwXf(clearInterval, v64);
          clearInterval(v65);
          clearInterval(v66);
          let v197 = await v194.kzsRO(f47, v74);
          let v198 = "";
          if (v194.nzNJf(v68, 0)) {
            if (v194.wDLez !== v194.gJQYD) {
              v198 = "[32m+" + v68 + "[0m";
            } else {
              p401.error(v195.lRrKK, p402);
            }
          } else if (v194.slLYr(v194.wtlDB, v194.IGBUZ)) {
            v198 = "";
          } else {
            p400 = true;
          }
          if (/expired/.test(v196)) {
            if (v194.uIdJO(v194.HGjAb, v194.MYSXJ)) {
              await v194.jbvtB(f28);
              await v194.cMwXf(f50, 2000);
            } else if (v196) {
              r.log(v195.rJtte, "                                                          \nBotTok " + E + " TikTok Up Bot (by @DevMHOne)    Exit: [CTRL+C] \n", v195.tEndS);
            } else {
              i.log(v195.rJtte, "                                                          \n@@@@@@@    @@@@@@   @@@@@@@   @@@@@@@   @@@@@@   @@@  @@@  \n@@@@@@@@  @@@@@@@@  @@@@@@@   @@@@@@@  @@@@@@@@  @@@  @@@  \n@@!  @@@  @@!  @@@    @@!       @@!    @@!  @@@  @@!  !@@  \n!@   @!@  !@!  @!@    !@!       !@!    !@!  @!@  !@!  @!!  \n@!@!@!@   @!@  !@!    @!!       @!!    @!@  !@!  @!@@!@!   \n!!!@!!!!  !@!  !!!    !!!       !!!    !@!  !!!  !!@!!!    \n!!:  !!!  !!:  !!!    !!:       !!:    !!:  !!!  !!: :!!   \n:!:  !:!  :!:  !:!    :!:       :!:    :!:  !:!  :!:  !:!  \n:: ::::  ::::: ::     ::        ::    ::::: ::   ::  :::  \n:: : ::    : :  :      :         :      : :  :    :   :::", "\n\nBotTok " + b + " TikTok Up Bot (by @DevMHOne)    Exit: [CTRL+C] \n", v195.tEndS);
              z.log(d + " Find help in Telegram (https://t.me/bottok_help)\n");
            }
          }
          if (/many requests/.test(v196) || /again later/.test(v196) || /not working/.test(v196) || /valid video/.test(v196)) {
            if (v194.slLYr(v194.ugvPL, v194.ybqKd)) {
              if (!v24) {
                if (v194.rwrja(v194.RUnFr, v194.kGtbD)) {
                  v194.cMwXf(p401, "Cookies injected! (" + p402 + ")");
                } else {
                  process.stdout.moveCursor(0, -3);
                  process.stdout.clearScreenDown();
                  process.stdout.write("\n" + v48 + "[33m " + p401 + " [34m[" + v197 + "][0m " + v198 + "  [90m(" + v194.AGVvW(f53) + " /hr " + v194.jitDb(v194.hiYNr(f52), 60).toFixed(2) + " hrs)[0m\n\n");
                  process.stdout.write(v51 + " Waiting: " + v62 + " mins (ERROR: " + v196.substring(0, 24) + ")...");
                }
              }
              v194.IVINq(f51, "Waiting " + v62 + " mins (ERROR: " + v196 + ")...");
              await v194.GXVcx(f50, v194.ydUYz(v194.rWMeB(v62, 60), 1000));
            } else {
              const v199 = v195.RjHGC(p402, v194);
              const v200 = v199.text();
              const v201 = v200.match(/"liveRoomStats":\s*{\s*"userCount":\s*(\d+)/);
              if (v201) {
                const v202 = v195.RjHGC(w, v201[1]);
                return v202;
              }
            }
          }
          if (!v24) {
            if (v194.SWoHw(v194.VxsEU, v194.VxsEU)) {
              process.stdout.moveCursor(0, -3);
              process.stdout.clearScreenDown();
              process.stdout.write("\n" + v48 + "[33m " + p401 + " [34m[" + v197 + "][0m " + v198 + "  [90m(" + v194.VSHFm(f53) + " /hr " + v194.jitDb(v194.jbvtB(f52), 60).toFixed(2) + " hrs)[0m\n\n");
              process.stdout.write(v49 + " Running: Trying again (ERROR: " + v196.substring(0, 24) + ")...");
            } else {
              v194.WvEjE(y, "[" + Z + "] " + r + " (+" + E + ") [" + i + "] Accumulation limit reached! (in " + v194.AGVvW(b) + " mins)");
              if (!z) {
                N.stdout.clearLine(0);
                F.stdout.cursorTo(0);
                q.stdout.write(R + " Accumulation limit reached!");
              }
              P.exit(0);
            }
          }
          v194.cMwXf(f51, "Trying again (ERROR: " + v196 + ")...");
          p399 = await v194.Tncat(f8, p399);
          await p399.goto(v81, {
            timeout: 0
          });
          v194.cwUKv(f22, p401, p402, p399, true);
          return;
        } else {
          return p400;
        }
      }
    }
  }, 20000);
}
async function f24(p445, p446, p447, p448, p449 = null) {
  const v204 = {
    rNATi: function (p450, p451) {
      return p450 / p451;
    },
    xlCSg: function (p452, p453) {
      return p452 - p453;
    },
    bKJfO: function (p454, p455) {
      return p454 + p455;
    },
    quuLj: function (p456, p457) {
      return p456 * p457;
    },
    OTraX: function (p458, p459) {
      return p458 + p459;
    },
    Extyx: function (p460, p461) {
      return p460 * p461;
    },
    fBeaP: function (p462, p463) {
      return p462(p463);
    },
    kqUDd: "[36m",
    wUuXm: function (p464, p465) {
      return p464(p465);
    },
    KKivF: "[0m",
    ZzJKg: function (p466, p467) {
      return p466(p467);
    },
    KvdyO: "--disable-gpu",
    WCmwm: "--disable-gpu-compositing",
    AvRKD: function (p468, p469) {
      return p468 !== p469;
    },
    FBOzR: "ZpdmY",
    ijEBn: "You are using the FREE version limited to ~5000\n",
    DKAAe: "accumulations. The advantage of acquiring the\n",
    gYLsl: "license is that the bot continues to work\n",
    whqVU: "indefinitely and accumulates large amounts.\n",
    PxmaI: function (p470, p471) {
      return p470(p471);
    },
    RQvGd: function (p472, p473) {
      return p472(p473);
    },
    KXfJV: function (p474, p475) {
      return p474 === p475;
    },
    hOprj: function (p476, p477) {
      return p476 === p477;
    },
    MdMVx: "utf8",
    XHEtW: function (p478, p479) {
      return p478 === p479;
    },
    amMXy: function (p480, p481) {
      return p480(p481);
    },
    rBmRn: function (p482, p483) {
      return p482(p483);
    },
    DFeFO: "eng",
    mlNqR: function (p484, p485) {
      return p484 === p485;
    },
    UzcQf: "MjLjW",
    aTqMG: "Treai",
    TyAEQ: function (p486, p487) {
      return p486(p487);
    },
    tuYrU: function (p488, p489) {
      return p488 === p489;
    },
    nUsMP: "XBSUD",
    OFRJC: function (p490, p491) {
      return p490 === p491;
    },
    DWswc: "xlZBe",
    uoepz: function (p492, p493, p494, p495, p496, p497) {
      return p492(p493, p494, p495, p496, p497);
    },
    zTrBd: function (p498, p499, p500, p501) {
      return p498(p499, p500, p501);
    },
    iQadH: "QaTTc",
    aJkMx: function (p502, p503) {
      return p502 === p503;
    },
    QNBmT: "baoHr",
    dJtzt: "WwVHr",
    DTziy: "SIKZZ",
    dpESJ: function (p504, p505) {
      return p504 !== p505;
    },
    QSZBB: "ZHixj",
    eCmjT: "hEttH",
    hjhZm: function (p506, p507) {
      return p506 - p507;
    },
    CasAQ: "KMpde",
    wcfCg: function (p508, p509) {
      return p508(p509);
    },
    IPJRr: "zyxQA",
    sLVju: "IVtod",
    twRTa: function (p510, p511) {
      return p510 === p511;
    },
    ztEQr: "zRnpA",
    sNClK: "hJLKl",
    gxPef: function (p512, p513) {
      return p512 >= p513;
    },
    DvVCP: "ZJjUu",
    szucy: function (p514, p515) {
      return p514(p515);
    },
    xrddC: function (p516, p517) {
      return p516 === p517;
    },
    SdllG: "Up Views",
    QDQdh: "BZtRx",
    FiUvX: "ZabKm",
    ZkyvN: function (p518, p519) {
      return p518 >= p519;
    },
    fupqq: "nYbHb",
    yVEWR: function (p520, p521) {
      return p520(p521);
    },
    OaFXJ: function (p522, p523) {
      return p522 === p523;
    },
    nrIdx: "Up Shares",
    ifOug: "jZWkt",
    cblCf: function (p524, p525) {
      return p524(p525);
    },
    rhaED: function (p526, p527) {
      return p526 >= p527;
    },
    mPgIR: "yoyjW",
    RDaDB: function (p528, p529) {
      return p528(p529);
    },
    BCWnj: "Up Favorites",
    kXlAI: "IrYyq",
    iIOwF: "dndRL",
    POLbr: "fIGdW",
    CFkKx: function (p530, p531) {
      return p530 === p531;
    },
    biFQx: "uTush",
    ENVSO: "pMYoM",
    TIbKV: function (p532, p533) {
      return p532 === p533;
    },
    tGwfn: function (p534, p535) {
      return p534 !== p535;
    },
    jkijJ: "LFeiL",
    NLdTc: "wltFS",
    yidIy: function (p536, p537) {
      return p536 !== p537;
    },
    VEYCj: "QHsuV",
    QKJRB: "RkCvL",
    DWufW: function (p538, p539) {
      return p538 !== p539;
    },
    OVDAf: function (p540, p541) {
      return p540 !== p541;
    },
    tYAve: "XiGOG",
    boDgh: function (p542, p543) {
      return p542(p543);
    },
    PHMQO: "en-US",
    stNZW: "HiIdH",
    ZKMWH: "lAxLq",
    ofnNX: "Up Comments Hearts",
    bGAkg: function (p544, p545) {
      return p544 === p545;
    },
    vATVt: function (p546, p547) {
      return p546(p547);
    },
    DmDEC: function (p548, p549) {
      return p548 === p549;
    },
    YWNrW: "XMheE",
    Qmnsj: function (p550, p551) {
      return p550 === p551;
    },
    vAUjf: "VWYUM",
    hQcAf: "XjhCG",
    QMBos: function (p552, p553) {
      return p552 - p553;
    },
    Lzgmk: function (p554, p555) {
      return p554 - p555;
    },
    XFPYH: function (p556, p557) {
      return p556 !== p557;
    },
    OKrHX: function (p558, p559) {
      return p558 === p559;
    },
    oXarv: "rvOnl",
    taphN: "GJaJO",
    YAJeL: function (p560, p561) {
      return p560(p561);
    },
    lJMFj: function (p562, p563) {
      return p562 > p563;
    },
    ZDjeS: "iNfxW",
    uzrzs: "bADDU",
    MGvyS: "zZXLm",
    yPkFx: "jQBPp",
    tYwej: "RvHmz",
    YaJKm: function (p564, p565) {
      return p564 / p565;
    },
    mowNl: function (p566) {
      return p566();
    },
    AfTNM: function (p567, p568) {
      return p567 || p568;
    },
    dEbXN: "OSlZZ",
    FfnLZ: function (p569, p570) {
      return p569 > p570;
    },
    wwhME: function (p571, p572) {
      return p571 === p572;
    },
    bhdCj: "OGosS",
    cHLil: function (p573) {
      return p573();
    },
    SkfXQ: function (p574, p575, p576) {
      return p574(p575, p576);
    },
    LoURF: function (p577, p578) {
      return p577 > p578;
    },
    ibbnq: function (p579, p580) {
      return p579 > p580;
    },
    fqTgb: function (p581, p582) {
      return p581 === p582;
    },
    rjKKx: "ksBpG",
    SIttN: function (p583, p584) {
      return p583(p584);
    },
    BNrMo: function (p585) {
      return p585();
    },
    hytLB: "RxwQF",
    rSlab: "GoGOi",
    RlWIQ: "min-limit",
    lScsJ: function (p586, p587) {
      return p586 < p587;
    },
    KDDch: function (p588, p589) {
      return p588 > p589;
    },
    PEzbI: "WXLbV",
    bCzsg: "qxObK",
    JMBju: "max-time",
    hXYPZ: function (p590) {
      return p590();
    },
    gyBRG: "uGgLK",
    rGLve: function (p591, p592) {
      return p591(p592);
    },
    fTTnH: function (p593) {
      return p593();
    },
    GAiSr: "lzFwQ",
    LFsEx: function (p594, p595, p596) {
      return p594(p595, p596);
    }
  };
  let v205 = 0;
  let v206;
  let v207 = "";
  let v208 = false;
  let v209 = true;
  let v210 = 0;
  let v211 = await f47(v74);
  return v204.LFsEx(setInterval, async () => {
    const v212 = {
      Oqwgt: function (p597, p598) {
        return v204.KXfJV(p597, p598);
      },
      iJgcQ: function (p599, p600) {
        return v204.xlCSg(p599, p600);
      },
      HRreE: function (p601, p602) {
        return v204.hOprj(p601, p602);
      },
      xcSuS: function (p603, p604) {
        return v204.ZzJKg(p603, p604);
      },
      kZwig: v204.MdMVx,
      svkxp: function (p605, p606) {
        return v204.RQvGd(p605, p606);
      },
      jTXOA: v204.ijEBn,
      voWmK: "accumulations. The advantage of acquiring the\n",
      NdYjd: v204.gYLsl,
      cpKUb: v204.whqVU,
      ASnGQ: function (p607, p608) {
        return v204.XHEtW(p607, p608);
      },
      foPSd: function (p609, p610) {
        return v204.amMXy(p609, p610);
      },
      KJqop: function (p611, p612) {
        return v204.rBmRn(p611, p612);
      },
      nWGpK: function (p613, p614) {
        return v204.ZzJKg(p613, p614);
      },
      AFIJG: v204.DFeFO
    };
    if (v204.mlNqR(v204.UzcQf, v204.aTqMG)) {
      p446("Solve the captcha manually...");
    } else {
      let v213 = await p445.evaluate("(() => {\n        return document.querySelector(\"" + p446 + " > div > div\").innerText;\n      })();");
      let v214 = v204.TyAEQ(f20, v213);
      if (/@/.test(v213) && v204.tuYrU(p449, null)) {
        if (v204.AvRKD(v204.nUsMP, v204.nUsMP)) {
          return v204.rNATi(v204.xlCSg(v204.bKJfO(v204.quuLj(p449.hrtime()[0], 1000000000), v204.hrtime()[1]), v204.OTraX(v204.Extyx(v205[0], 1000000000), v206[1])), 60000000000).toFixed(2);
        } else {
          if (!v24) {
            if (v204.OFRJC(v204.DWswc, v204.DWswc)) {
              process.stdout.moveCursor(0, -3);
              process.stdout.cursorTo(0);
              process.stdout.clearScreenDown();
            } else {
              p449.stdout.clearLine(0);
              v204.stdout.cursorTo(0);
              v205.stdout.write(v206 + " Stopped for not accumulating the defined minimum!");
            }
          }
          v204.fBeaP(clearInterval, v64);
          v204.ZzJKg(clearInterval, v65);
          p449 = await v204.rBmRn(f21, v214);
          v64 = await v204.uoepz(f24, p445, p446, p447, p448, p449);
          v65 = await v204.zTrBd(f25, p445, p446, p449);
          console.log("\n\n");
        }
      }
      v213 = v213.replace(/(\r\n|\n|\r)/gm, " ");
      let vV49 = v49;
      vV49 = /limit/.test(v213) ? v50 : vV49;
      vV49 = /error/.test(v213) ? v50 : vV49;
      vV49 = /not working/.test(v213) ? v50 : vV49;
      vV49 = /valid video/.test(v213) ? v50 : vV49;
      vV49 = /again later/.test(v213) ? v50 : vV49;
      vV49 = /error/.test(v213) ? v50 : vV49;
      vV49 = /found/.test(v213) ? v50 : vV49;
      vV49 = /expired/.test(v213) ? v50 : vV49;
      vV49 = /many requests/.test(v213) ? v50 : vV49;
      vV49 = /wait/.test(v213) ? v208 ? v51 : v52 : vV49;
      if (v204.AvRKD(p449, null) && v214.length) {
        if (v204.mlNqR(v204.iQadH, v204.iQadH)) {
          v205 = v214[p449].likes;
          if (v204.aJkMx(v67, 0)) {
            if (v204.KXfJV(v204.QNBmT, v204.QNBmT)) {
              if (v69 === 0) {
                if (v204.aJkMx(v204.dJtzt, v204.DTziy)) {
                  if (v212.Oqwgt(v205, 0)) {
                    v211 = v212;
                  } else {
                    r = v212.iJgcQ(v213, v214);
                  }
                } else {
                  v67 = v205;
                }
              } else if (v204.dpESJ(v204.QSZBB, v204.eCmjT)) {
                v67 = v204.hjhZm(v205, v69);
              } else {
                v204 = v205 ? v204.fBeaP(v206, v207[0].replace(/[,\.]/g, "")) : v208;
              }
            } else {
              p447.log(v204.kqUDd, "                                                          \nBotTok " + p448 + " TikTok Up Bot (by @DevMHOne)    Exit: [CTRL+C] \n", "[0m");
            }
          }
          v68 = Math.abs(v204.xlCSg(v205, v67));
          v213 = v214[p449].concat;
          if (v204.dpESJ(v68, v210)) {
            if (v204.AvRKD(v204.CasAQ, v204.CasAQ)) {
              v204.wUuXm(v204, "[" + v205 + "] " + v206 + " (+" + v207 + ") " + v208);
            } else {
              v204.wcfCg(f51, "[" + p447 + "] " + v205 + " (+" + v68 + ") " + p448);
            }
          }
          v210 = v68;
        } else if (v212.HRreE(v205, 0)) {
          v211 = v212;
        } else {
          r = v212.iJgcQ(v213, v214);
        }
      } else if (v204.tuYrU(v204.IPJRr, v204.sLVju)) {
        p446.log("Cloudflare Expired / Zefoy Expired");
        return false;
      } else {
        const v215 = v213.replace(" ", "").match(/\d+(,\d+)*(?![^,])/g);
        if ((v209 || /^Submit/.test(v213.replace(" ", ""))) && v204.dpESJ(p447, "Up Comments Hearts")) {
          if (v204.twRTa(v204.ztEQr, v204.ztEQr)) {
            v206 = v205;
            if (v204.hOprj(p447, "Up Hearts")) {
              if (v204.AvRKD(v204.sNClK, "hJLKl")) {
                p449.log(v204.kqUDd, "                                                          \n@@@@@@@    @@@@@@   @@@@@@@   @@@@@@@   @@@@@@   @@@  @@@  \n@@@@@@@@  @@@@@@@@  @@@@@@@   @@@@@@@  @@@@@@@@  @@@  @@@  \n@@!  @@@  @@!  @@@    @@!       @@!    @@!  @@@  @@!  !@@  \n!@   @!@  !@!  @!@    !@!       !@!    !@!  @!@  !@!  @!!  \n@!@!@!@   @!@  !@!    @!!       @!!    @!@  !@!  @!@@!@!   \n!!!@!!!!  !@!  !!!    !!!       !!!    !@!  !!!  !!@!!!    \n!!:  !!!  !!:  !!!    !!:       !!:    !!:  !!!  !!: :!!   \n:!:  !:!  :!:  !:!    :!:       :!:    :!:  !:!  :!:  !:!  \n:: ::::  ::::: ::     ::        ::    ::::: ::   ::  :::  \n:: : ::    : :  :      :         :      : :  :    :   :::", "\n\nBotTok " + v204 + " TikTok Up Bot (by @DevMHOne)    Exit: [CTRL+C] \n", v204.KKivF);
                v205.log(v206 + " Find help in Telegram (https://t.me/bottok_help)\n");
              } else {
                let v216 = await v204.ZzJKg(f56, p448);
                v205 = v216?.diggCount || v206;
                if (v204.gxPef(v205, 10000) || !v216) {
                  if (v204.hOprj("dnSgj", v204.DvVCP)) {
                    v212.xcSuS(p446, "Check proxies...");
                  } else {
                    v205 = (await v204.szucy(f58, p448))?.diggCount || v206;
                  }
                }
              }
            }
            if (v204.xrddC(p447, v204.SdllG)) {
              if (v204.twRTa(v204.QDQdh, v204.FiUvX)) {
                return null;
              } else {
                let v217 = await f56(p448);
                v205 = v217?.playCount || v206;
                if (v204.ZkyvN(v205, 10000) || !v217) {
                  if (v204.hOprj(v204.fupqq, v204.fupqq)) {
                    v205 = (await v204.yVEWR(f58, p448))?.playCount || v206;
                  } else {
                    p448.appendFileSync(p449, v204 + "\n", v212.kZwig);
                  }
                }
              }
            }
            if (v204.OaFXJ(p447, v204.nrIdx)) {
              if (v204.dpESJ("jZWkt", v204.ifOug)) {
                v212.xcSuS(v204, "[" + v205 + "] " + v206 + " (+" + v207 + ") " + v208);
              } else {
                let v218 = await v204.cblCf(f56, p448);
                v205 = v218?.shareCount || v206;
                if (v204.rhaED(v205, 10000) || !v218) {
                  if (v204.aJkMx(v204.mPgIR, v204.mPgIR)) {
                    v205 = (await v204.RDaDB(f58, p448))?.shareCount || v206;
                  } else {
                    v212.svkxp(p446, "Zefoy is unreachable or blocked! (you need proxy/vpn)");
                  }
                }
              }
            }
            if (p447 === v204.BCWnj) {
              if (v204.AvRKD(v204.kXlAI, v204.kXlAI)) {
                return false;
              } else {
                let v219 = await f56(p448);
                v205 = v219?.collectCount || v206;
                if (!v219) {
                  if (v204.dpESJ(v204.iIOwF, v204.POLbr)) {
                    v205 = v215 ? parseInt(v215[0].replace(/[,\.]/g, "")) : v206;
                  } else {
                    v212.xcSuS(p447, p448);
                    return null;
                  }
                }
              }
            }
            if (v204.CFkKx(v67, 0)) {
              if (v204.AvRKD(v204.biFQx, v204.ENVSO)) {
                if (v204.TIbKV(v69, 0)) {
                  if (v204.tGwfn(v204.jkijJ, v204.NLdTc)) {
                    v67 = v205;
                  } else {
                    v212.xcSuS(p446, "Zefoy is accessible! :)");
                  }
                } else if (v204.yidIy(v204.VEYCj, v204.QKJRB)) {
                  v67 = v205 - v69;
                } else {
                  return false;
                }
              } else {
                v212.xcSuS(p447, "Launch " + p448.provider + " in headless browser...");
              }
            }
            v68 = Math.abs(v204.xlCSg(v205, v67));
            if (v204.DWufW(v68, v210)) {
              if (v204.OVDAf(v204.tYAve, v204.tYAve)) {
                p448 = v212.iJgcQ(p449, v204);
              } else {
                v204.boDgh(f51, "[" + p447 + "] " + v205 + " (+" + v68 + ") " + p448);
              }
            }
            v210 = v68;
            v209 = false;
            v213 = v205.toLocaleString(v204.PHMQO);
          } else {
            p448.info("\n\n", v212.jTXOA, v212.voWmK, v212.NdYjd, v212.cpKUb, p449 + " Buy license in[35m " + v204 + "[0m\n");
          }
        } else if (v204.OaFXJ(v204.stNZW, v204.ZKMWH)) {
          v204.ZzJKg(p447, p448);
          return null;
        } else if (v215 && v204.OVDAf(p447, v204.ofnNX)) {
          if (v204.bGAkg("SGRwH", "WWmOd")) {
            const vP447 = p447(p448);
            if (!vP447.ok) {
              return null;
            }
            const v220 = vP447.text();
            const v221 = v220.match(/"canonical":"https:\\u002F\\u002Fwww\.tiktok\.com\\u002F@\w+\\u002F(?:video|photo)\\u002F(\d+)"/);
            if (v221 && v221[1]) {
              return v221[1];
            } else {
              return null;
            }
          } else {
            v205 = v204.vATVt(parseInt, v215[0].replace(/[,\.]/g, ""));
            if (v204.DmDEC(v67, 0)) {
              if (v204.yidIy(v204.YWNrW, v204.YWNrW)) {
                return null;
              } else if (v204.Qmnsj(v69, 0)) {
                if (v204.dpESJ(v204.vAUjf, "VWYUM")) {
                  if (v212.ASnGQ(v205, 0)) {
                    v211 = v212;
                  } else {
                    r = v212.iJgcQ(v213, v214);
                  }
                } else {
                  v67 = v205;
                }
              } else if (v204.hQcAf === v204.hQcAf) {
                v67 = v204.QMBos(v205, v69);
              } else {
                return true;
              }
            }
            v68 = Math.abs(v204.Lzgmk(v205, v67));
            if (v204.XFPYH(v68, v210)) {
              if (v204.OKrHX(v204.oXarv, v204.taphN)) {
                const v222 = v212.svkxp(v208, v209);
                if (!v222.ok) {
                  return null;
                }
                const v223 = v222.text();
                const v224 = v223.match(/"stats":\s*{\s*"followerCount":(\d+),\s*"followingCount":(\d+),\s*"heart":(\d+),\s*"heartCount":(\d+),\s*"videoCount":(\d+),\s*"diggCount":(\d+),\s*"friendCount":(\d+)\s*}/);
                if (v224) {
                  const [, v225, v226, v227, v228, v229, v230, v231] = v224;
                  return {
                    followerCount: v212.xcSuS(z, v225),
                    followingCount: v212.foPSd(d, v226),
                    heart: v212.foPSd(J, v227),
                    heartCount: X(v228),
                    videoCount: v212.xcSuS(Y, v229),
                    diggCount: v212.xcSuS(P, v230),
                    friendCount: v212.KJqop(N, v231)
                  };
                } else {
                  return null;
                }
              } else {
                v204.YAJeL(f51, "[" + p447 + "] " + v205 + " (+" + v68 + ") " + p448);
              }
            }
            v210 = v68;
          }
        }
      }
      if (v204.lJMFj(v68, 0)) {
        if (v204.OKrHX(v204.ZDjeS, v204.uzrzs)) {
          return p446.task;
        } else {
          v207 = "[32m+" + v68 + "[0m";
        }
      } else if (v204.twRTa("zZXLm", v204.MGvyS)) {
        v207 = "";
      } else {
        p447.stdout.moveCursor(0, -4);
        p448.stdout.clearScreenDown();
      }
      if (!v24) {
        if (v204.mlNqR(v204.yPkFx, v204.tYwej)) {
          v212.nWGpK(p448, p449);
          return v204;
        } else {
          process.stdout.moveCursor(0, -3);
          process.stdout.clearScreenDown();
          process.stdout.write("\n" + v48 + "[33m " + p447 + " [34m[" + v211 + "][0m " + v207 + "  [90m(" + f53() + " /hr " + v204.YaJKm(v204.mowNl(f52), 60).toFixed(2) + " hrs)[0m\n\n");
          process.stdout.write(vV49 + " Running: " + v213.substring(0, 43));
        }
      }
      if (v204.AfTNM(v22, v24) && v25) {
        if (v204.OaFXJ(v204.dEbXN, v204.dEbXN)) {
          v204.wcfCg(f51, "[" + p447 + "] " + v205 + " (+" + v68 + ") [" + p448 + "] Running: " + v213);
        } else {
          return new p448((p615, p616) => {
            v205.recognize(v206, v212.AFIJG).then(({
              data: {
                text: H5
              }
            }) => {
              p615(H5);
            });
          });
        }
      }
      if (!vA0f0.includes(await f33()) && v204.FfnLZ(v68, Math.sqrt(Infinity))) {
        if (v204.wwhME(v204.bhdCj, v204.bhdCj)) {
          vV49 = v50;
          v204.TyAEQ(clearInterval, v64);
          v204.wUuXm(clearInterval, v65);
          clearInterval(v66);
          await v204.cHLil(f34);
          v204.SkfXQ(setTimeout, async () => {
            const v232 = {
              yHaoD: v204.KvdyO,
              RbAeL: v204.WCmwm
            };
            const vV232 = v232;
            if (v204.AvRKD("IDqJS", v204.FBOzR)) {
              console.info("\n\n", v204.ijEBn, v204.DKAAe, v204.gYLsl, v204.whqVU, v59 + " Buy license in[35m " + v47 + "[0m\n");
            } else {
              p447 = [...p448, vV232.yHaoD, vV232.RbAeL];
            }
          }, 100);
        } else {
          p446.exit(0);
        }
      }
      if (vA0W.limit && v204.LoURF(vA0W.limit, 0) && v204.ibbnq(v68, vA0W.limit)) {
        if (v204.fqTgb(v204.rjKKx, v204.rjKKx)) {
          v204.SIttN(f51, "[" + p447 + "] " + v205 + " (+" + v68 + ") [" + p448 + "] Accumulation limit reached! (in " + v204.BNrMo(f52) + " mins)");
          if (!v24) {
            if (v204.hytLB === v204.rSlab) {
              return false;
            } else {
              process.stdout.clearLine(0);
              process.stdout.cursorTo(0);
              process.stdout.write(v52 + " Accumulation limit reached!");
            }
          }
          process.exit(0);
        } else {
          p448 += p449[v204];
        }
      }
      if (vA0W[v204.RlWIQ] && vA0W[v204.RlWIQ] > 0 && v204.lScsJ(v68, vA0W[v204.RlWIQ]) && v204.KDDch(v204.BNrMo(f52), 60)) {
        if (v204.DWufW(v204.PEzbI, v204.bCzsg)) {
          f51("[" + p447 + "] " + v205 + " (+" + v68 + ") [" + p448 + "] Stopped for not accumulating the defined minimum! (in " + f52() + " mins)");
          if (!v24) {
            process.stdout.clearLine(0);
            process.stdout.cursorTo(0);
            process.stdout.write(v52 + " Stopped for not accumulating the defined minimum!");
          }
          process.exit(0);
        } else {
          const v233 = v204.PxmaI(p447, p448[1]);
          return v233;
        }
      }
      if (vA0W[v204.JMBju] && v204.FfnLZ(vA0W[v204.JMBju], 0) && v204.ibbnq(v204.hXYPZ(f52), v204.Extyx(vA0W[v204.JMBju], 60))) {
        if (v204.dpESJ(v204.gyBRG, v204.gyBRG)) {
          v204.RQvGd(p447, "Wrong captcha! (" + p448 + ")");
        } else {
          v204.rGLve(f51, "[" + p447 + "] " + v205 + " (+" + v68 + ") [" + p448 + "] Stopped for reaching the maximum time limit! (in " + v204.fTTnH(f52) + " mins)");
          if (!v24) {
            if (v204.OaFXJ(v204.GAiSr, "wpgBB")) {
              p447.stdout.moveCursor(0, -6);
              p448.stdout.clearScreenDown();
            } else {
              process.stdout.clearLine(0);
              process.stdout.cursorTo(0);
              process.stdout.write(v52 + " Stopped for reaching the maximum time limit!");
            }
          }
          process.exit(0);
        }
      }
      v208 = !v208;
    }
  }, 1000);
}
async function f25(p617, p618, p619 = null) {
  const v234 = {
    CKOfz: function (p620, p621) {
      return p620(p621);
    },
    dRany: function (p622, p623) {
      return p622 !== p623;
    },
    ISBlH: "EJroZ",
    RpeHc: "uVDbp",
    DyKjS: function (p624, p625) {
      return p624 !== p625;
    },
    zXGKV: "mqXUP",
    fHcyr: function (p626, p627) {
      return p626 !== p627;
    },
    nomrl: function (p628, p629, p630) {
      return p628(p629, p630);
    }
  };
  return v234.nomrl(setInterval, async () => {
    const v235 = {
      FzGKT: function (p631, p632) {
        return v234.CKOfz(p631, p632);
      }
    };
    if (v234.dRany(v234.ISBlH, v234.ISBlH)) {
      v235.stdout.clearLine(0);
      m.stdout.cursorTo(0);
      w.stdout.write(A + " Accumulation limit reached!");
    } else {
      try {
        if (v234.RpeHc !== "uVDbp") {
          v235.FzGKT(p618, "Bypassing Cloudflare...");
        } else {
          await p617.evaluate("(() => {\n          document.querySelector(\"button.wbutton\").click();\n        })();");
        }
      } catch (c) {}
      let v236 = await p617.evaluate("(() => {\n        return document.querySelector(\"" + p618 + " > div > div\").innerText;\n      })();");
      if (/READY/.test(v236)) {
        if (v234.DyKjS(v234.zXGKV, v234.zXGKV)) {
          return true;
        } else {
          await p617.evaluate("(() => {\n          document\n            .querySelector(\"" + p618 + " > div > form > div > div > button\")\n            .click();\n        })();");
        }
      }
      if (/@/.test(v236) && v234.fHcyr(p619, null)) {
        await p617.evaluate("(() => {\n          document\n            .querySelectorAll(\"" + p618 + " > div > div > form > ul > li > div > button\")[" + p619 + "]\n            .click();\n        })();");
      }
    }
  }, 5000);
}
async function f26(p633) {
  const v237 = {
    fFvDq: function (p634, p635) {
      return p634 === p635;
    },
    QWLsf: "pieiG",
    uyTdX: "bt.com",
    LfYAv: "user_agent",
    EXdWY: function (p636, p637) {
      return p636(p637);
    }
  };
  try {
    if (v237.fFvDq(v237.QWLsf, v237.QWLsf)) {
      const v238 = {
        domain: "bt.com",
        name: "bt_proxy",
        value: v74
      };
      p633.push(v238);
      p633.push({
        domain: v237.uyTdX,
        name: v237.LfYAv,
        value: v237.EXdWY(encodeURIComponent, v71)
      });
      await a0L.promises.writeFile(v82, JSON.stringify(p633));
    } else {
      m.stdout.clearLine(0);
      w.stdout.cursorTo(0);
      A.stdout.write(c + " Wrong captcha! (" + D + ")");
    }
  } catch (m) {}
}
async function f27(p638) {
  const v239 = {
    ZNCOd: function (p639, p640) {
      return p639 + p640;
    },
    EyvZA: " Solve captcha automatically...",
    wJRiC: function (p641, p642) {
      return p641(p642);
    },
    ZDBcu: "./alpine-update.sh",
    ufOci: function (p643, p644) {
      return p643 !== p644;
    },
    uuxVK: "Iwlwx",
    QhgWn: function (p645, p646) {
      return p645 || p646;
    },
    adbcr: "Letuf",
    HSxdO: function (p647) {
      return p647();
    },
    VCedK: function (p648, p649) {
      return p648 === p649;
    },
    CWgyw: "OUAGg",
    WkLVc: "EOTUI"
  };
  try {
    if (v239.ufOci("Letuf", v239.adbcr)) {
      p.stdout.clearLine(0);
      m.stdout.cursorTo(0);
      w.stdout.write(v239.ZNCOd(A, v239.EyvZA));
    } else {
      const v240 = await v239.HSxdO(f29);
      p638 = JSON.parse(p638);
      if (v239.VCedK(v240.length, 0)) {
        if (v239.ufOci(v239.CWgyw, v239.CWgyw)) {
          f.stdout.moveCursor(0, -3);
          v240.stdout.clearScreenDown();
        } else {
          await a0L.promises.writeFile(v82, JSON.stringify(p638));
        }
      } else if (v239.WkLVc !== v239.WkLVc) {
        v239.wJRiC(v239, "Chrome/Chromium executable is valid!");
      } else {
        const v241 = v240.map(p650 => {
          if (v239.ufOci(v239.uuxVK, v239.uuxVK)) {
            v239.log(v239.ZDBcu);
          } else {
            const v242 = p638.find(p651 => p651.name === p650.name);
            return v239.QhgWn(v242, p650);
          }
        });
        await a0L.promises.writeFile(v82, JSON.stringify(v241));
      }
    }
  } catch (A) {}
}
async function f28() {
  const v243 = {
    VJxeN: function (p652, p653) {
      return p652 === p653;
    },
    kSIhe: "LeInB",
    lxWfA: "sxcoL",
    nzWUl: function (p654, p655) {
      return p654 && p655;
    },
    qWtXO: function (p656, p657) {
      return p656 + p657;
    },
    GpPYV: " Cookies invalid/expired!"
  };
  const vV243 = v243;
  try {
    if (vV243.VJxeN(vV243.kSIhe, vV243.lxWfA)) {
      p.stdout.clearLine(0);
      m.stdout.cursorTo(0);
      w.stdout.write(A + " Stopped for reaching the maximum time limit!");
    } else if (a0L.existsSync(v82)) {
      if (vV243.nzWUl(!v24, !v27)) {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write(vV243.qWtXO(v56, vV243.GpPYV));
      }
      await a0L.promises.unlink(v82);
    }
  } catch (p) {}
}
async function f29() {
  const v244 = {
    oHEMc: function (p658, p659) {
      return p658 !== p659;
    },
    XSzns: "MBIyf"
  };
  const vV244 = v244;
  try {
    const v245 = await a0L.promises.readFile(v82);
    return JSON.parse(v245);
  } catch (p) {
    if (vV244.oHEMc(vV244.XSzns, vV244.XSzns)) {
      const v246 = v246 ? function () {
        if (v246) {
          const v247 = i.apply(b, arguments);
          z = null;
          return v247;
        }
      } : function () {};
      I = false;
      return v246;
    } else {
      return [];
    }
  }
}
async function f30(p660) {
  const v248 = {
    GTDag: function (p661, p662) {
      return p661 + p662;
    },
    KSPma: function (p663, p664) {
      return p663 + p664;
    },
    GaUgI: function (p665, p666) {
      return p665 === p666;
    },
    vFLNF: "CaEhE",
    MobZR: "uZGMz"
  };
  const vV248 = v248;
  try {
    if (vV248.GaUgI(vV248.vFLNF, vV248.MobZR)) {
      p.stdout.clearLine(1);
      m.stdout.cursorTo(0);
      w.stdout.write(vV248.GTDag(vV248.KSPma(A, " Chrome/Chromium executable is valid!"), " ".repeat(17)));
    } else {
      await a0L.promises.writeFile(v35, JSON.stringify(p660));
    }
  } catch (m) {}
}
async function f31() {
  const v249 = {
    rZaLA: function (p667, p668) {
      return p667(p668);
    },
    oGSJt: function (p669, p670) {
      return p669(p670);
    },
    PDknf: function (p671, p672) {
      return p671(p672);
    },
    LSGCi: function (p673, p674) {
      return p673 !== p674;
    },
    sNFqR: "zXXum",
    XLTXy: "sWdFv",
    yNsah: function (p675, p676) {
      return p675 !== p676;
    },
    WVAQM: "jjfWj"
  };
  try {
    if (v249.LSGCi(v249.sNFqR, v249.XLTXy)) {
      const v250 = await a0L.promises.readFile(v35);
      let v251 = JSON.parse(v250);
      v251.sort((p677, p678) => p678.timestamp - p677.timestamp);
      return v251;
    } else {
      const vA = A(c);
      if (!vA.ok) {
        return null;
      }
      const v252 = vA.text();
      const v253 = v252.match(/"stats":\s*{\s*"diggCount":(\d+),\s*"shareCount":(\d+),\s*"commentCount":(\d+),\s*"playCount":(\d+),\s*"collectCount":"(\d+)"\s*}/);
      if (v253) {
        const [, v254, v255, v256, v257, v258] = v253;
        return {
          diggCount: v249.rZaLA(r, v254),
          shareCount: v249.oGSJt(E, v255),
          commentCount: v249.oGSJt(i, v256),
          playCount: v249.oGSJt(b, v257),
          collectCount: v249.rZaLA(z, v258)
        };
      } else {
        return null;
      }
    }
  } catch (p) {
    if (v249.yNsah(v249.WVAQM, v249.WVAQM)) {
      v249.PDknf(f, u);
      return null;
    } else {
      return [];
    }
  }
}
async function f32(p679) {
  const v259 = {
    QXBmC: function (p680, p681) {
      return p680 !== p681;
    },
    wnbIq: "OULNI",
    DLVmb: "uETdG"
  };
  const vV259 = v259;
  try {
    if (vV259.QXBmC(vV259.wnbIq, vV259.DLVmb)) {
      const v260 = {
        license: p679
      };
      await a0L.promises.writeFile(v36, JSON.stringify(v260));
    } else {
      vV259.setPixelColor(m, w, A);
    }
  } catch (A) {}
}
async function f33() {
  const v261 = {
    dbGcC: function (p682, p683) {
      return p682(p683);
    },
    AxiMv: function (p684, p685) {
      return p684(p685);
    },
    MyxQM: function (p686, p687) {
      return p686 + p687;
    },
    ixAKS: function (p688, p689) {
      return p688 === p689;
    },
    Rxire: "gBGAe",
    eMIDo: "CXVvl",
    swOGb: "DRGyC"
  };
  try {
    if (v261.ixAKS(v261.Rxire, v261.Rxire)) {
      const v262 = await a0L.promises.readFile(v36);
      let v263 = JSON.parse(v262);
      return v263.license;
    } else {
      const [, v264, v265, v266, v267, v268] = v266;
      return {
        diggCount: v261.dbGcC(v267, v264),
        shareCount: v268(v265),
        commentCount: v261.AxiMv(D, v266),
        playCount: K(v267),
        collectCount: v261.dbGcC(I, v268)
      };
    }
  } catch (p) {
    if (v261.ixAKS(v261.eMIDo, v261.swOGb)) {
      m.stdout.clearLine(0);
      w.stdout.cursorTo(0);
      A.stdout.write(v261.MyxQM(c, " Check browser (" + D.substring(0, 34) + ")..."));
    } else {
      return false;
    }
  }
}
async function f34() {
  const v269 = {
    scQXO: function (p690) {
      return p690();
    },
    LvKlp: function (p691, p692) {
      return p691 === p692;
    },
    gxAqi: "btAtz",
    FmmiN: function (p693, p694) {
      return p693(p694);
    }
  };
  if (vA0f0.includes(await v269.scQXO(f33))) {
    return;
  }
  try {
    if (v269.LvKlp("btAtz", v269.gxAqi)) {
      const v270 = await v269.FmmiN(f35, false);
      const v271 = (await v270.pages())[0];
      await v271.goto(v47, {
        timeout: 0
      });
    } else {
      u.log(p);
      m.exit(0);
    }
  } catch (w) {}
}
async function f35(p695 = true) {
  const v273 = {
    isutf: function (p696, p697) {
      return p696(p697);
    },
    oFMGr: function (p698, p699) {
      return p698 && p699;
    },
    nRPQk: function (p700, p701) {
      return p700 + p701;
    },
    SzIrS: function (p702, p703) {
      return p702 + p703;
    },
    iwgnk: "Executable not found in the following path:\n",
    iuMpG: "Use the -b flag to set the path to the browser.",
    LeSBc: function (p704, p705) {
      return p704 === p705;
    },
    yApeZ: " (Latest)",
    JyKtv: "You are using the FREE version limited to ~5000\n",
    yqLTX: "accumulations. The advantage of acquiring the\n",
    BkmyS: "license is that the bot continues to work\n",
    MHgtS: "indefinitely and accumulates large amounts.\n",
    obpQx: function (p706, p707) {
      return p706(p707);
    },
    isrBc: function (p708, p709) {
      return p708 > p709;
    },
    ZfOFN: function (p710, p711) {
      return p710 && p711;
    },
    EQxyl: function (p712, p713) {
      return p712 === p713;
    },
    FhONC: "KKbbd",
    AMwxD: function (p714, p715) {
      return p714 + p715;
    },
    oBDnr: function (p716, p717) {
      return p716 !== p717;
    },
    lespE: "KOOHr",
    vrFxJ: "RDaRr",
    Almpp: function (p718, p719) {
      return p718(p719);
    },
    meVgc: "pEhFw",
    rkEMy: function (p720, p721) {
      return p720 && p721;
    },
    VTuBd: function (p722, p723) {
      return p722 === p723;
    },
    vMsiT: "msael",
    tsWAD: function (p724, p725) {
      return p724 + p725;
    },
    bGsEW: "CZjCY",
    RQVuU: function (p726, p727) {
      return p726(p727);
    },
    fGFat: "oWtOA",
    moeWS: "GFhDF",
    ldkwb: function (p728, p729) {
      return p728 === p729;
    },
    BAPpP: "pWsJQ",
    YHkGm: function (p730, p731) {
      return p730 + p731;
    },
    srEFZ: function (p732, p733) {
      return p732 === p733;
    },
    JvjoX: "VEDwz",
    jPlqW: function (p734, p735) {
      return p734(p735);
    },
    nThgR: function (p736, p737) {
      return p736(p737);
    },
    AhHlu: function (p738, p739) {
      return p738 === p739;
    },
    lQdaS: "LrfNF",
    XSfJq: "hwDSy",
    tXGoD: function (p740) {
      return p740();
    },
    ZFjih: "WcYbI",
    oGucc: function (p741, p742) {
      return p741 + p742;
    },
    CZKcm: " UA: ",
    ACOOK: function (p743, p744) {
      return p743 === p744;
    },
    oNgsT: "vzqmi",
    Tbojh: "--no-sandbox",
    HJPsM: "--window-position=200,0",
    sYXNo: function (p745, p746) {
      return p745 + p746;
    },
    lQRfd: "--user-agent=",
    WlKhJ: "LLCeN",
    DKPBg: "tmYCT",
    eUEGK: "--disable-gpu",
    yNNtc: "--disable-gpu-compositing",
    iKOQG: function (p747, p748) {
      return p747 !== p748;
    },
    QkOxg: "pRUmD",
    kxDTi: function (p749, p750) {
      return p749(p750);
    },
    LZtfA: "browser-remote",
    EqLtc: function (p751, p752) {
      return p751 !== p752;
    },
    rRbjn: "Dbkiu",
    Xsclf: "KRzSv",
    JLgPs: "dWBtf",
    lQLYJ: "browser-user",
    jWYQo: function (p753, p754) {
      return p753 && p754;
    },
    HPqbX: "nmain"
  };
  const v274 = vA0W.browser || a0s.executablePath();
  if (v273.ZfOFN(!v24, !v27)) {
    if (v273.EQxyl(v273.FhONC, "KKbbd")) {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(v273.AMwxD(v53, " Check browser (" + v274.substring(0, 34) + ")..."));
    } else {
      o = "";
    }
  } else if (v273.oBDnr(v273.lespE, v273.vrFxJ)) {
    v273.isutf(f51, "Check browser (" + v274 + ")...");
  } else {
    o("Check Zefoy accessibility...");
  }
  await v273.isutf(f50, 1000);
  if (await v273.Almpp(f61, v274)) {
    if (v273.oBDnr(v273.meVgc, v273.meVgc)) {
      o.log("\n\n");
    } else if (v273.rkEMy(!v24, !v27)) {
      if (v273.VTuBd(v273.vMsiT, v273.vMsiT)) {
        process.stdout.clearLine(1);
        process.stdout.cursorTo(0);
        process.stdout.write(v273.SzIrS(v273.tsWAD(v55, " Chrome/Chromium executable is valid!"), " ".repeat(17)));
      } else {
        v273.isutf(o, "Solve captcha automatically...");
      }
    } else if (v273.oBDnr(v273.bGsEW, v273.bGsEW)) {
      if (v273.oFMGr(!K, !I)) {
        J.stdout.clearLine(0);
        X.stdout.cursorTo(0);
        Y.stdout.write(v273.nRPQk(v273.SzIrS(P, " Chrome/Chromium executable is invalid!"), " ".repeat(15)));
        N.info("\n\n", v273.iwgnk, "\"" + F + "\"\n", v273.iuMpG);
      } else {
        v273.isutf(q, "Chrome/Chromium executable is invalid!");
      }
      d.exit(1);
    } else {
      v273.RQVuU(f51, "Chrome/Chromium executable is valid!");
    }
  } else if (v273.oBDnr(v273.fGFat, v273.moeWS)) {
    if (v273.rkEMy(!v24, !v27)) {
      if (v273.ldkwb(v273.BAPpP, v273.BAPpP)) {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write(v273.YHkGm(v56 + " Chrome/Chromium executable is invalid!", " ".repeat(15)));
        console.info("\n\n", v273.iwgnk, "\"" + v274 + "\"\n", v273.iuMpG);
      } else {
        return false;
      }
    } else if (v273.srEFZ("VEDwz", v273.JvjoX)) {
      v273.jPlqW(f51, "Chrome/Chromium executable is invalid!");
    } else {
      p695.log(v273);
      v274.exit(0);
    }
    process.exit(1);
  } else {
    o.log("Cloudflare Valid / Freer Expired");
  }
  await v273.nThgR(f50, 1000);
  if (a0L.existsSync(v82)) {
    if (v273.AhHlu(v273.lQdaS, v273.XSfJq)) {
      v273.isutf(f, "Wrong captcha! (" + p695 + ")");
    } else {
      const v275 = await v273.tXGoD(f29);
      const v276 = v275.find(p755 => p755.name === "user_agent");
      v71 = v276 ? v273.jPlqW(decodeURIComponent, v276.value) : v71;
      const v277 = v275.find(p756 => p756.name === "bt_proxy");
      v74 = v277?.value || v74;
    }
  }
  let vV74 = v74;
  let v278 = await v273.nThgR(f47, v74);
  if (v273.rkEMy(!v24, !v27)) {
    if (v273.ZFjih !== v273.ZFjih) {
      vV74.log(v273.LeSBc(v278.tag_name, v279) ? "> " : "", v280.tag_name, v273.LeSBc(K.tag_name, I) ? v273.yApeZ : "");
    } else {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(v273.oGucc(v273.nRPQk(v53, v273.CZKcm), v71.substring(0, 48)));
    }
  } else if (v273.ACOOK(v273.oNgsT, v273.oNgsT)) {
    v273.RQVuU(f51, "UA: " + v71);
  } else {
    vV74.stdout.clearLine(0);
    v278.stdout.cursorTo(0);
    v279.stdout.write(v273.nRPQk(v280 + " Chrome/Chromium executable is invalid!", " ".repeat(15)));
    K.info("\n\n", "Executable not found in the following path:\n", "\"" + I + "\"\n", v273.iuMpG);
  }
  let v279 = [v273.Tbojh, "--window-size=900,900", v273.HJPsM, v273.sYXNo(v273.lQRfd, v71), v273.YHkGm("--proxy-server=", vV74)];
  if (v29) {
    if (v273.oBDnr(v273.WlKhJ, v273.DKPBg)) {
      v279 = [...v279, v273.eUEGK, v273.yNNtc];
    } else {
      f.stdout.clearLine(0);
      p695.stdout.cursorTo(0);
    }
  }
  if (v273.rkEMy(!v24, !v27)) {
    if (v273.iKOQG(v273.QkOxg, v273.QkOxg)) {
      f = "[32m+" + p695 + "[0m";
    } else {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(v273.AMwxD(v53, vV74 ? " Launch browser (proxy: " + vV74 + " [" + v278 + "])..." : " Launch browser..."));
      await v273.kxDTi(f50, 1000);
    }
  }
  v273.nThgR(f51, vV74 ? "Launch browser (proxy: " + vV74 + " [" + v278 + "])..." : "Launch browser...");
  let v280;
  if (vA0W[v273.LZtfA]) {
    if (v273.EqLtc(v273.rRbjn, v273.Xsclf)) {
      const v281 = {
        browserWSEndpoint: vA0W[v273.LZtfA]
      };
      v280 = await a0s.connect(v281);
    } else {
      p695.info("\n\n", v273.JyKtv, v273.yqLTX, v273.BkmyS, v273.MHgtS, v273 + " Buy license in[35m " + v274 + "[0m\n");
    }
  } else if (v273.JLgPs === v273.JLgPs) {
    const v283 = {
      headless: p695,
      args: v279,
      defaultViewport: {
        width: 900,
        height: 900
      },
      executablePath: vA0W.browser,
      userDataDir: vA0W[v273.lQLYJ]
    };
    v280 = await a0s.launch(v283);
  } else {
    v273.obpQx(f, "UA: " + p695);
  }
  if (v273.jWYQo(!v24, !v27)) {
    if (v273.VTuBd(v273.HPqbX, v273.HPqbX)) {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
    } else {
      const v284 = v273.obpQx(v273, v273.nRPQk(v274, vV74));
      const v285 = v284.json();
      if (v273.isrBc(v285.length, 0)) {
        return v285[0].word;
      } else {
        return v279;
      }
    }
  }
  return v280;
}
async function f36(p757 = true) {
  const v286 = {
    bkFLi: function (p758, p759) {
      return p758(p759);
    },
    JuaYz: function (p760, p761) {
      return p760(p761);
    },
    KaYdI: function (p762, p763) {
      return p762(p763);
    },
    KFTNf: function (p764, p765) {
      return p764(p765);
    },
    DHGfg: function (p766, p767) {
      return p766 === p767;
    },
    nWndf: function (p768, p769) {
      return p768 - p769;
    },
    oypFC: function (p770, p771) {
      return p770(p771);
    },
    LaTls: function (p772, p773) {
      return p772 || p773;
    },
    zGVDe: function (p774, p775) {
      return p774(p775);
    },
    kCMee: function (p776, p777) {
      return p776(p777);
    },
    eeqcy: function (p778, p779) {
      return p778 + p779;
    },
    FhDwF: "Executable not found in the following path:\n",
    yOmID: "Use the -b flag to set the path to the browser.",
    QXBFv: "You are using the FREE version!\n",
    bEgEN: "The --detach or -d mode is exclusive to Premium mode\n",
    DxlPT: "and allows BotTok to be launched as background processes.\n",
    BXvzP: function (p780, p781) {
      return p780 && p781;
    },
    pVNaq: function (p782, p783) {
      return p782 !== p783;
    },
    Xmnvp: "HaBqo",
    fBHDn: "cCWOO",
    Qymty: "HIZpI",
    TKCST: "utf8",
    SaDHN: function (p784, p785) {
      return p784 < p785;
    },
    weXmI: "RDlXy",
    jByLs: "MtZSV",
    VIopQ: function (p786, p787) {
      return p786(p787);
    },
    TyylV: function (p788, p789) {
      return p788 !== p789;
    },
    cqQKy: "ZXFYJ",
    OjBMn: "wgfbi",
    pTgDZ: function (p790, p791) {
      return p790 !== p791;
    },
    kvlZM: "stHNc",
    abIYQ: "FnMYK",
    TLkii: function (p792, p793) {
      return p792 === p793;
    },
    KvATZ: "pOsqL",
    IeVkI: "gpklj",
    RoLay: function (p794, p795) {
      return p794 && p795;
    },
    qasmW: "Hlamy",
    bpcVD: function (p796, p797) {
      return p796(p797);
    },
    ZFodu: function (p798, p799) {
      return p798 !== p799;
    },
    ovUnq: "emMLo",
    gbYgb: "GiYNr",
    kOzbe: function (p800, p801) {
      return p800(p801);
    },
    egpVA: function (p802, p803) {
      return p802 !== p803;
    },
    KJHSP: "BfLAz",
    qcRxd: "iaZTf",
    XXTQg: function (p804, p805) {
      return p804 === p805;
    },
    qdgxE: "PzkHq",
    HixIq: "ZrdUV",
    XGAhN: function (p806, p807) {
      return p806(p807);
    },
    frrgh: "YeUYS",
    etext: "qptgE",
    uAeCq: function (p808, p809) {
      return p808(p809);
    },
    XJOyM: function (p810, p811) {
      return p810(p811);
    },
    fdnyn: "EZfoi",
    WAWWj: "OLVFU",
    PcgOe: function (p812, p813) {
      return p812 && p813;
    },
    IYbqm: function (p814, p815) {
      return p814(p815);
    },
    iIjWc: function (p816, p817) {
      return p816(p817);
    },
    wMbMH: function (p818, p819) {
      return p818(p819);
    },
    JlVGU: "yHRzb",
    EqTDE: "ooIrO",
    yRmZn: function (p820, p821) {
      return p820 && p821;
    },
    uOlyK: function (p822, p823) {
      return p822 === p823;
    },
    qTSsg: "MTQKu",
    BpmZv: function (p824, p825) {
      return p824 && p825;
    },
    xgNiz: function (p826, p827) {
      return p826 !== p827;
    },
    nkXHD: "tyJfu",
    zbwfF: "zwQvm",
    vofys: "zFkem",
    jDMNl: function (p828, p829) {
      return p828 >= p829;
    },
    nGIeP: function (p830, p831) {
      return p830 !== p831;
    },
    DKEvd: "PGDVd",
    PAzSV: "KXmcf",
    ovriA: function (p832, p833) {
      return p832 && p833;
    },
    tcbpJ: function (p834, p835) {
      return p834 !== p835;
    },
    CYHDl: "eivoI",
    WMqUr: "jAyYu",
    mLeEe: "DeFuZ",
    tJcIK: function (p836, p837) {
      return p836(p837);
    }
  };
  if (v286.BXvzP(!v24, !v27)) {
    if (v286.pVNaq(v286.Xmnvp, v286.Xmnvp)) {
      m.stdout.clearLine(0);
      w.stdout.cursorTo(0);
      A.stdout.write(c + " Cookies injected! (" + D + ")");
    } else {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(v61 + "  Check proxies...");
    }
  } else if (v286.pVNaq(v286.fBHDn, v286.Qymty)) {
    v286.KFTNf(f51, "Check proxies...");
  } else {
    return {
      username: D[1],
      comment: K[2],
      timestamp: I[3],
      likes: v286.bkFLi(y, Z[4].replace(/[,\.]/g, "")),
      concat: "@" + r[1] + " \"" + E[2].substring(0, 10) + "...\" " + i[3] + " (" + b[4] + ")"
    };
  }
  let vV39 = v39;
  const v287 = a0L.readFileSync(v40, v286.TKCST).split("\n");
  const v288 = v287.sort((p838, p839) => 0.5 - Math.random());
  for (let v289 = 0; v286.SaDHN(v289, v288.length); v289++) {
    if (v286.weXmI === v286.jByLs) {
      v286.JuaYz(vV39, "Captcha resolved! (" + v287 + ")");
    } else {
      vV39 = v288[v289].trim();
      if (v41 && !v41.split(",").includes(await v286.VIopQ(f47, vV39))) {
        if (v286.TyylV(v286.cqQKy, v286.OjBMn)) {
          continue;
        } else {
          return true;
        }
      }
      if (vV39 && !v73.includes(vV39)) {
        if (v286.pTgDZ(v286.kvlZM, v286.abIYQ)) {
          try {
            if (v286.TLkii(v286.KvATZ, v286.IeVkI)) {
              vV39.stdout.moveCursor(0, -2);
              v287.stdout.clearScreenDown();
            } else {
              if (v286.RoLay(!v24, !v27)) {
                if (v286.pTgDZ("DGngA", v286.qasmW)) {
                  let v290 = await v286.bpcVD(f47, vV39);
                  process.stdout.clearLine(0);
                  process.stdout.cursorTo(0);
                  process.stdout.write(v61 + "  Check Proxy: " + vV39 + " [" + v290 + "]");
                } else {
                  m.stdout.clearLine(0);
                  w.stdout.cursorTo(0);
                  v289.stdout.write(c + " Captcha resolved! (" + D + ")");
                }
              } else if (v286.ZFodu(v286.ovUnq, v286.gbYgb)) {
                let v291 = await v286.KFTNf(f47, vV39);
                v286.kOzbe(f51, "Check Proxy: " + vV39 + " [" + v291 + "]");
              } else {
                vV39("SESSID: " + v287);
              }
              if (await f37(vV39, p757)) {
                if (v286.egpVA(v286.KJHSP, v286.qcRxd)) {
                  if (v286.RoLay(!v24, !v27)) {
                    if (v286.XXTQg(v286.qdgxE, v286.HixIq)) {
                      try {
                        const v292 = v286.KaYdI(w, v289);
                        if (!v292.ok) {
                          return null;
                        }
                        const v293 = v292.text();
                        return v293;
                      } catch (d) {
                        v286.bkFLi(D, d);
                        return null;
                      }
                    } else {
                      let v294 = await v286.XGAhN(f47, vV39);
                      process.stdout.clearLine(0);
                      process.stdout.cursorTo(0);
                      process.stdout.write(v55 + " Proxy: " + vV39 + " [" + v294 + "] works!");
                    }
                  } else if (v286.TLkii(v286.frrgh, v286.etext)) {
                    v286.KFTNf(vV39, "Wrong captcha! (" + v287 + ")");
                  } else {
                    let v295 = await v286.uAeCq(f47, vV39);
                    v286.XJOyM(f51, "Proxy: " + vV39 + " [" + v295 + "] works!");
                  }
                  break;
                } else if (v286.DHGfg(w, 0)) {
                  y = Z;
                } else {
                  r = v286.nWndf(E, v289);
                }
              } else if (v286.DHGfg(v286.fdnyn, v286.WAWWj)) {
                vV39.log(v287);
                return false;
              } else {
                v73.push(vV39);
                if (v286.PcgOe(!v24, !v27)) {
                  let v296 = await v286.IYbqm(f47, vV39);
                  process.stdout.clearLine(0);
                  process.stdout.cursorTo(0);
                  process.stdout.write(v56 + " Proxy: " + vV39 + " [" + v296 + "] failed!");
                } else {
                  let v297 = await v286.iIjWc(f47, vV39);
                  v286.wMbMH(f51, "Proxy: " + vV39 + " [" + v297 + "] failed!");
                }
              }
              await v286.XGAhN(f50, 1000);
            }
          } catch (N) {
            if (v286.XXTQg(v286.JlVGU, v286.EqTDE)) {
              m.stdout.clearLine(0);
              w.stdout.cursorTo(0);
              v289.stdout.write(c + " Captcha resolved! (" + D + ")");
            } else {
              v73.push(vV39);
              if (v286.yRmZn(!v24, !v27)) {
                if (v286.uOlyK(v286.qTSsg, v286.qTSsg)) {
                  let v298 = await f47(vV39);
                  process.stdout.clearLine(0);
                  process.stdout.cursorTo(0);
                  process.stdout.write(v61 + "  Proxy: " + vV39 + " [" + v298 + "] failed: " + N.code);
                } else {
                  v286.oypFC(v286, "Continue without using proxy!");
                }
              } else {
                let v299 = await v286.JuaYz(f47, vV39);
                v286.XGAhN(f51, "Proxy: " + vV39 + " [" + v299 + "] failed: " + N.code);
              }
            }
          }
        } else {
          const v300 = v287.find(p840 => p840.name === v300.name);
          return v286.LaTls(v300, m);
        }
      }
    }
  }
  if (v286.BpmZv(!v24, !v27)) {
    if (v286.xgNiz(v286.nkXHD, v286.zbwfF)) {
      let v301 = await f47(vV39);
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(v61 + "  Trying Proxy: " + vV39 + " [" + v301 + "]");
      await v286.bkFLi(f50, 1000);
    } else {
      v286.zGVDe(vV39, "Captcha resolved! (" + v287 + ")");
    }
  } else if (v286.TyylV(v286.vofys, v286.vofys)) {
    v286.JuaYz(w, "[" + A + "] " + c + " (+" + D + ") [" + K + "] Running: " + I);
  } else {
    let v302 = await f47(vV39);
    v286.kCMee(f51, "Trying Proxy: " + vV39 + " [" + v302 + "]");
  }
  if (v286.jDMNl(v73.length, v288.length)) {
    if (v286.nGIeP(v286.DKEvd, v286.PAzSV)) {
      if (v286.ovriA(!v24, !v27)) {
        if (v286.tcbpJ(v286.CYHDl, v286.WMqUr)) {
          process.stdout.clearLine(0);
          process.stdout.cursorTo(0);
          process.stdout.write(v61 + "  Continue without using proxy!");
          await v286.oypFC(f50, 1000);
        } else {
          v286.kCMee(vV39, v287);
          return null;
        }
      } else if (v286.TLkii(v286.mLeEe, v286.mLeEe)) {
        v286.tJcIK(f51, "Continue without using proxy!");
      } else {
        w.stdout.clearLine(0);
        A.stdout.cursorTo(0);
        c.stdout.write(v286.eeqcy(v286.eeqcy(D, " Chrome/Chromium executable is invalid!"), " ".repeat(15)));
        K.info("\n\n", v286.FhDwF, "\"" + I + "\"\n", v286.yOmID);
      }
      return v39;
    } else {
      m.info("BotTok " + w + " TikTok Up Bot (by @DevMHOne)\n\n", v286.QXBFv, v286.bEgEN, v286.DxlPT, A + " Buy license in[35m " + c + "[0m\n");
      D.exit(0);
    }
  }
  return vV39;
}
async function f37(p841, p842 = true) {
  const v303 = {
    drgCa: function (p843, p844) {
      return p843(p844);
    },
    UfzxU: function (p845, p846) {
      return p845 + p846;
    },
    CEbTK: "debu",
    BRBxb: "gger",
    dVoUX: "action",
    GWBSQ: function (p847, p848) {
      return p847 - p848;
    },
    PavKI: "--no-sandbox",
    aFKvn: "--window-size=900,900",
    NTwxo: "--window-position=200,0",
    NNAQb: "--user-agent=",
    PokEC: function (p849, p850) {
      return p849 + p850;
    },
    Gxnib: "--proxy-server=",
    nBDbA: "--disable-gpu",
    VfEAF: "--disable-gpu-compositing",
    RQWbm: "browser-user",
    nrdbB: "SxvGe",
    AakPN: "domcontentloaded",
    rYZPG: function (p851, p852) {
      return p851 !== p852;
    },
    LImrW: "Wepwg",
    bvdJp: function (p853, p854) {
      return p853 === p854;
    },
    dNNxv: "NaYGT"
  };
  let v304 = [v303.PavKI, v303.aFKvn, v303.NTwxo, v303.UfzxU(v303.NNAQb, v71), v303.PokEC(v303.Gxnib, p841)];
  if (v29) {
    v304 = [...v304, v303.nBDbA, v303.VfEAF];
  }
  const v305 = {
    headless: p842,
    args: v304,
    executablePath: vA0W.browser,
    userDataDir: vA0W[v303.RQWbm]
  };
  const v306 = await a0s.launch(v305);
  try {
    if (v303.nrdbB !== v303.nrdbB) {
      return v303.drgCa(v303, v303.drgCa(v304, v303.drgCa(v305, v306)));
    } else {
      const v307 = (await v306.pages())[0];
      const v308 = {
        timeout: 10000,
        waitUntil: v303.AakPN
      };
      await v307.goto(v81, v308);
      const v309 = await v307.content();
      if (/Zefoy/.test(v309) || /_cf_chl_opt/.test(v309)) {
        if (v303.rYZPG(v303.LImrW, v303.LImrW)) {
          (function () {
            return true;
          }).constructor(sXdrcQ.UfzxU(sXdrcQ.CEbTK, sXdrcQ.BRBxb)).call(sXdrcQ.dVoUX);
        } else {
          return true;
        }
      }
      return false;
    }
  } catch (Z) {
    return false;
  } finally {
    if (v303.bvdJp("AFhNJ", v303.dNNxv)) {
      p842 = v303.GWBSQ(v303, v304);
    } else {
      await v306.close();
    }
  }
}
async function f38() {
  const v310 = {
    PoPQa: function (p855) {
      return p855();
    },
    OqqGa: function (p856, p857) {
      return p856 || p857;
    },
    qIjiB: function (p858, p859) {
      return p858(p859);
    },
    HhmLd: function (p860) {
      return p860();
    },
    aFPvO: function (p861, p862) {
      return p861(p862);
    },
    xEUQP: "win-update.bat",
    NOMiU: function (p863, p864) {
      return p863 + p864;
    },
    VZDXb: " UA: ",
    qgSBO: function (p865, p866) {
      return p865 === p866;
    },
    ctZVB: "fpbUc",
    AaMRB: function (p867, p868) {
      return p867 && p868;
    },
    ZmZwc: function (p869, p870) {
      return p869 === p870;
    },
    UKzwB: "FPVil",
    jqkbl: "QCJDb",
    GxUhN: function (p871, p872) {
      return p871(p872);
    },
    MoCiz: function (p873, p874) {
      return p873(p874);
    },
    hxdwN: function (p875, p876, p877) {
      return p875(p876, p877);
    },
    Zorau: "IeEip",
    viwQg: "RWuge",
    uuhRT: function (p878, p879) {
      return p878 && p879;
    },
    DiQXF: function (p880, p881) {
      return p880 !== p881;
    },
    DlNdT: "cBlRl",
    PLRzy: function (p882, p883) {
      return p882(p883);
    },
    SYYqh: "fUplQ",
    CunMG: function (p884, p885) {
      return p884(p885);
    },
    xMZyH: function (p886, p887) {
      return p886(p887);
    },
    mrWAD: function (p888, p889) {
      return p888 && p889;
    },
    gyVoC: "dfGVP",
    YIBeX: "blmIJ",
    GrGYL: "QEpWP",
    aedxl: "Dndij",
    uqyln: function (p890, p891) {
      return p890(p891);
    },
    ylxWJ: function (p892, p893) {
      return p892 && p893;
    },
    vYeTa: "VopOU",
    BicBM: "PwSvr",
    CfRca: "raPMv"
  };
  let vV392 = v39;
  if (vV392) {
    if (v310.qgSBO(v310.ctZVB, v310.ctZVB)) {
      if (v310.AaMRB(!v24, !v27)) {
        if (v310.ZmZwc(v310.UKzwB, v310.jqkbl)) {
          hqAvUF.PoPQa(vV392);
        } else {
          process.stdout.clearLine(0);
          process.stdout.cursorTo(0);
          process.stdout.write(v61 + "  Check proxies...");
        }
      } else {
        v310.GxUhN(f51, "Check proxies...");
      }
      await v310.MoCiz(f50, 1000);
      if (await v310.hxdwN(f37, vV392, v26)) {
        if (v310.ZmZwc(v310.Zorau, v310.viwQg)) {
          p.stdout.moveCursor(0, v310.OqqGa(m, w) ? -22 : -23);
          A.stdout.clearScreenDown();
        } else if (v310.uuhRT(!v24, !v27)) {
          if (v310.DiQXF(v310.DlNdT, v310.DlNdT)) {
            v310.qIjiB(y, "[" + Z + "] " + r + " (+" + E + ") [" + i + "] Stopped for not accumulating the defined minimum! (in " + v310.HhmLd(b) + " mins)");
            if (!z) {
              N.stdout.clearLine(0);
              F.stdout.cursorTo(0);
              q.stdout.write(R + " Stopped for not accumulating the defined minimum!");
            }
            P.exit(0);
          } else {
            let v311 = await v310.PLRzy(f47, vV392);
            process.stdout.clearLine(0);
            process.stdout.cursorTo(0);
            process.stdout.write(v61 + "  Proxy: " + vV392 + " [" + v311 + "] works!");
          }
        } else if (v310.DiQXF(v310.SYYqh, v310.SYYqh)) {
          m = w ? v310.aFPvO(A, c[0].replace(/[,\.]/g, "")) : D;
        } else {
          let v312 = await v310.CunMG(f47, vV392);
          v310.xMZyH(f51, "Proxy: " + vV392 + " [" + v312 + "] works!");
        }
      } else {
        if (v310.mrWAD(!v24, !v27)) {
          if (v310.DiQXF(v310.gyVoC, v310.YIBeX)) {
            let v313 = await v310.qIjiB(f47, vV392);
            process.stdout.clearLine(0);
            process.stdout.cursorTo(0);
            process.stdout.write(v61 + "  Proxy: " + vV392 + " [" + v313 + "] failed!");
          } else {
            f.stdout.moveCursor(0, -1);
            u.stdout.clearScreenDown();
          }
        } else if (v310.DiQXF(v310.GrGYL, v310.aedxl)) {
          let v314 = await v310.uqyln(f47, vV392);
          v310.MoCiz(f51, "Proxy: " + vV392 + " [" + v314 + "] failed!");
        } else {
          vV392.log(v310.xEUQP);
        }
        vV392 = "";
        await f50(1000);
        if (v310.ylxWJ(!v24, !v27)) {
          if (v310.DiQXF(v310.vYeTa, v310.vYeTa)) {
            f.stdout.moveCursor(0, -9);
            u.stdout.clearScreenDown();
          } else {
            process.stdout.clearLine(0);
            process.stdout.cursorTo(0);
            process.stdout.write(v61 + "  Do not use proxy!");
          }
        } else if (v310.qgSBO(v310.BicBM, v310.BicBM)) {
          v310.uqyln(f51, "Do not use proxy!");
        } else {
          m.stdout.clearLine(0);
          w.stdout.cursorTo(0);
          A.stdout.write(v310.NOMiU(v310.NOMiU(c, v310.VZDXb), D.substring(0, 48)));
        }
      }
      await v310.xMZyH(f50, 1000);
    } else {
      m("[" + w + "] " + A + " (+" + c + ") " + D);
    }
  }
  if (v40) {
    if (v310.DiQXF(v310.CfRca, v310.CfRca)) {
      if (p) {
        const v315 = c.apply(D, arguments);
        K = null;
        return v315;
      }
    } else {
      vV392 = await v310.xMZyH(f36, v26);
    }
  }
  return vV392;
}
async function f39() {
  const v316 = {
    XjeqS: function (p894) {
      return p894();
    },
    hXMoJ: function (p895) {
      return p895();
    },
    YUfas: function (p896, p897) {
      return p896(p897);
    }
  };
  await v316.XjeqS(f41);
  let v317 = await v316.hXMoJ(f8);
  return await v316.YUfas(f40, v317);
}
async function f40(p898) {
  const v318 = {
    Lyqxk: function (p899, p900) {
      return p899 < p900;
    },
    IPcSi: function (p901, p902) {
      return p901 === p902;
    },
    gBfjH: "Up ",
    zmAvS: "APhkR",
    wCypm: "DmhSr"
  };
  const vV318 = v318;
  let v319 = await p898.evaluate("(() => {\n      let choices = Array.from(document.querySelectorAll(\".card-body\"));\n      choices = choices.map((c) => {\n        const parts = c.innerText.replace(" + /(\r\n|\n|\r)/gm + ", \" \").split(\"  \");\n        return {\n          name: 'Up ' + parts[0],\n          disabled:" + /soon/ + ".test(parts[1]) ? true : false,\n        };\n      });\n      return choices.filter((c) => !c.disabled);\n    })();");
  if (!v319.length || vV318.IPcSi(v319[0].name, vV318.gBfjH)) {
    if (vV318.IPcSi(vV318.zmAvS, vV318.wCypm)) {
      let v320 = "";
      for (let v321 = 0; vV318.Lyqxk(v321, v319.length); v321 += 2) {
        v320 += w[v321];
      }
      return v320.split("").reverse().join("");
    } else {
      return false;
    }
  }
  const v322 = v319.map(p903 => p903.name);
  return v322;
}
async function f41(p904 = true, p905 = true) {
  const v323 = {
    vOoql: function (p906, p907) {
      return p906 || p907;
    },
    uhesz: function (p908, p909) {
      return p908(p909);
    },
    WcFuU: function (p910, p911) {
      return p910 + p911;
    },
    fSGXW: function (p912, p913) {
      return p912 - p913;
    },
    BbqKr: function (p914, p915) {
      return p914 > p915;
    },
    JYQtS: function (p916, p917) {
      return p916 - p917;
    },
    cuBIG: function (p918, p919) {
      return p918(p919);
    },
    xAdkt: function (p920) {
      return p920();
    },
    ALnqU: function (p921, p922) {
      return p921 === p922;
    },
    QFeCd: "pkAik",
    ttZDv: "INoja",
    DzKzg: "MWQZM",
    WieRE: function (p923, p924) {
      return p923(p924);
    },
    ghnye: function (p925, p926) {
      return p925(p926);
    },
    PFTRX: function (p927, p928) {
      return p927 === p928;
    },
    EqWGu: "zOoJO",
    Bsqmf: "VxxhI",
    slwix: function (p929, p930) {
      return p929 && p930;
    },
    sFWLr: function (p931, p932) {
      return p931 !== p932;
    },
    Vkuxh: "gFynR",
    rNzxO: function (p933, p934) {
      return p933 + p934;
    },
    Sfcwo: function (p935, p936) {
      return p935 !== p936;
    },
    fuVIj: "gJRIc",
    voCcy: "pOalu",
    QBGwo: "CiEdd",
    DhAvm: "GETNm",
    MSmrT: function (p937, p938) {
      return p937 && p938;
    },
    KyoJC: "HDsRS",
    Qmlrz: "Executable not found in the following path:\n",
    UUpsM: "Use the -b flag to set the path to the browser.",
    eGBvv: function (p939, p940) {
      return p939 !== p940;
    },
    RoFFq: "OjphW",
    JnFRy: "XPHDG",
    HTDbf: function (p941, p942) {
      return p941(p942);
    },
    GzXgG: function (p943, p944) {
      return p943 !== p944;
    },
    PjMVE: "OfWnz",
    FimzO: function (p945, p946) {
      return p945 !== p946;
    },
    wzVaj: "jHIdR",
    huwkU: function (p947, p948) {
      return p947 && p948;
    },
    wzpCt: function (p949, p950) {
      return p949 !== p950;
    },
    RZAsc: "TqKRo",
    yIVma: function (p951, p952) {
      return p951(p952);
    },
    gcnow: function (p953) {
      return p953();
    },
    XsOYL: function (p954, p955, p956) {
      return p954(p955, p956);
    },
    Lszhd: "dozsh",
    QIxuC: "XiqWN",
    AaUzf: function (p957, p958) {
      return p957 && p958;
    },
    uQelV: "NXjIJ",
    mZpow: "qMMQl",
    PgHhT: function (p959, p960) {
      return p959 === p960;
    },
    PPXKW: "UNHFu",
    byBSh: function (p961, p962) {
      return p961 && p962;
    },
    RGYFp: function (p963, p964) {
      return p963 === p964;
    },
    ATkqz: "STQmK",
    VBixf: "EEXst",
    VvyVr: function (p965, p966) {
      return p965 !== p966;
    },
    TcYSV: "aQQDr",
    cCnwn: "HjNjR",
    XPnNH: function (p967, p968) {
      return p967(p968);
    },
    lWcDN: "Sigqe",
    CVmDw: "OQprM",
    USAVA: "IVfkf",
    DOZdR: function (p969, p970) {
      return p969(p970);
    },
    YADqo: function (p971, p972) {
      return p971(p972);
    },
    vhtcO: function (p973, p974) {
      return p973 !== p974;
    },
    Hcuuk: "xlXAP",
    uyBOb: "RKkzs",
    gWFGe: function (p975, p976) {
      return p975 && p976;
    },
    hJLmd: "SdPmP",
    LjdqG: "PWHfW",
    JucXZ: "VVnJE",
    DimaS: "irnNl",
    uWdRT: function (p977, p978) {
      return p977(p978);
    },
    ucSAQ: function (p979, p980) {
      return p979(p980);
    }
  };
  const v324 = vA0W.browser || a0s.executablePath();
  if (!v24 && !v27) {
    if (v323.ALnqU(v323.QFeCd, v323.ttZDv)) {
      p.stdout.moveCursor(0, v323.vOoql(m, w) ? -22 : -23);
      A.stdout.clearScreenDown();
    } else {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(v323.WcFuU(v53, " Check browser (" + v324.substring(0, 34) + ")..."));
    }
  } else if (v323.ALnqU(v323.DzKzg, v323.DzKzg)) {
    f51("Check browser (" + v324 + ")...");
  } else {
    const v325 = v323.uhesz(v323, v324);
    if (!v325.ok) {
      return null;
    }
    const v326 = v325.text();
    return v326;
  }
  await v323.WieRE(f50, 1000);
  if (await v323.ghnye(f61, v324)) {
    if (v323.PFTRX(v323.EqWGu, v323.Bsqmf)) {
      const v327 = y.intToRGBA(Z.getPixelColor(r, E));
      const v328 = v323.WcFuU(v323.WcFuU(i.abs(v323.fSGXW(v327.r, v327.g)), b.abs(v323.fSGXW(v327.g, v327.b))), z.abs(v323.fSGXW(v327.r, v327.b)));
      if (v323.BbqKr(v328, d)) {
        N.setPixelColor(F, q, R);
      }
    } else if (v323.slwix(!v24, !v27)) {
      if (v323.sFWLr(v323.Vkuxh, v323.Vkuxh)) {
        return false;
      } else {
        process.stdout.clearLine(1);
        process.stdout.cursorTo(0);
        process.stdout.write(v323.WcFuU(v323.rNzxO(v55, " Chrome/Chromium executable is valid!"), " ".repeat(17)));
      }
    } else if (v323.Sfcwo(v323.fuVIj, v323.voCcy)) {
      v323.WieRE(f51, "Chrome/Chromium executable is valid!");
    } else {
      const v329 = {
        rSlQw: function (p981, p982) {
          return v323.uhesz(p981, p982);
        }
      };
      const v330 = /@(\w+)\n(.+)\n(\d+\s\w+\sago)\n([\d|\,]+)/g;
      const v331 = [...v323.matchAll(v330)];
      return v331.map(p983 => {
        return {
          username: p983[1],
          comment: p983[2],
          timestamp: p983[3],
          likes: v329.rSlQw(v330, p983[4].replace(/[,\.]/g, "")),
          concat: "@" + p983[1] + " \"" + p983[2].substring(0, 10) + "...\" " + p983[3] + " (" + p983[4] + ")"
        };
      });
    }
  } else if (v323.Sfcwo(v323.QBGwo, v323.DhAvm)) {
    if (v323.MSmrT(!v24, !v27)) {
      if (v323.Sfcwo(v323.KyoJC, "HDsRS")) {
        v324 = p.get(m);
      } else {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write(v323.WcFuU(v323.WcFuU(v56, " Chrome/Chromium executable is invalid!"), " ".repeat(15)));
        console.info("\n\n", v323.Qmlrz, "\"" + v324 + "\"\n", v323.UUpsM);
      }
    } else if (v323.eGBvv(v323.RoFFq, v323.JnFRy)) {
      v323.ghnye(f51, "Chrome/Chromium executable is invalid!");
    } else {
      v323 = v324;
    }
    process.exit(1);
  } else {
    v323 = "[32m+" + v324 + "[0m";
  }
  await v323.HTDbf(f50, 1000);
  if (a0L.existsSync(v82)) {
    if (v323.GzXgG(v323.PjMVE, v323.PjMVE)) {
      v323.uhesz(p905, "Zefoy is protected by UAM Cloudflare!");
    } else {
      p904 = false;
    }
  }
  if (p904) {
    if (v323.FimzO(v323.wzVaj, v323.wzVaj)) {
      v323 = v324;
    } else {
      if (v323.huwkU(!v24, !v27)) {
        if (v323.wzpCt(v323.RZAsc, v323.RZAsc)) {
          return p905[1];
        } else {
          process.stdout.clearLine(0);
          process.stdout.cursorTo(0);
          process.stdout.write(v53 + " Check Zefoy accessibility...");
        }
      } else {
        v323.yIVma(f51, "Check Zefoy accessibility...");
      }
      v74 = v74 || (await v323.gcnow(f38));
      if (await v323.XsOYL(f37, v74, p905)) {
        if (v323.Lszhd === v323.QIxuC) {
          return v323.stringify(v324.cookies.map(p984 => ({
            domain: p984.domain,
            expirationDate: p984.expires,
            hostOnly: p984.hostOnly,
            httpOnly: p984.httpOnly,
            name: p984.name,
            path: p984.path,
            sameSite: "unspecified",
            secure: p984.secure,
            session: p984.session,
            storeId: "0",
            value: p984.value
          })));
        } else {
          if (v323.AaUzf(!v24, !v27)) {
            if (v323.ALnqU(v323.uQelV, v323.mZpow)) {
              v324 = v323.JYQtS(p, m);
            } else {
              process.stdout.clearLine(0);
              process.stdout.cursorTo(0);
              process.stdout.write(v55 + " Zefoy is accessible! :)");
            }
          } else {
            v323.uhesz(f51, "Zefoy is accessible! :)");
          }
          if (await v323.XsOYL(f42, v74, p905)) {
            if (v323.PgHhT(v323.PPXKW, "lenkz")) {
              hsUNWw.uhesz(p905, 0);
            } else {
              if (v323.byBSh(!v24, !v27)) {
                if (v323.RGYFp(v323.ATkqz, v323.VBixf)) {
                  v323.stdout.clearLine(0);
                  v324.stdout.cursorTo(0);
                } else {
                  process.stdout.clearLine(0);
                  process.stdout.cursorTo(0);
                  process.stdout.write(v56 + " Zefoy is protected by UAM Cloudflare!");
                }
              } else if (v323.VvyVr(v323.TcYSV, v323.cCnwn)) {
                v323.yIVma(f51, "Zefoy is protected by UAM Cloudflare!");
              } else {
                v323.stdout.clearLine(0);
                v324.stdout.cursorTo(0);
              }
              await v323.XPnNH(f50, 1000);
              if (v323.AaUzf(!v24, !v27)) {
                if (v323.ALnqU(v323.lWcDN, "ncRHj")) {
                  v323.cuBIG(y, "[" + Z + "] " + r + " (+" + E + ") [" + i + "] Stopped for reaching the maximum time limit! (in " + v323.xAdkt(b) + " mins)");
                  if (!z) {
                    N.stdout.clearLine(0);
                    F.stdout.cursorTo(0);
                    q.stdout.write(R + " Stopped for reaching the maximum time limit!");
                  }
                  P.exit(0);
                } else {
                  process.stdout.clearLine(0);
                  process.stdout.cursorTo(0);
                  process.stdout.write(v60 + " Bypassing Cloudflare...");
                }
              } else if (v323.CVmDw === v323.USAVA) {
                p905 = "";
              } else {
                v323.DOZdR(f51, "Bypassing Cloudflare...");
              }
              await v323.YADqo(f45, v74);
            }
          }
        }
      } else if (v323.vhtcO(v323.Hcuuk, v323.uyBOb)) {
        if (v323.gWFGe(!v24, !v27)) {
          if (v323.vhtcO(v323.hJLmd, v323.LjdqG)) {
            process.stdout.clearLine(0);
            process.stdout.cursorTo(0);
            process.stdout.write(v56 + " Zefoy is unreachable or blocked! :(");
          } else {
            v324 = v323.fSGXW(p, m);
          }
        } else if (v323.vhtcO(v323.JucXZ, v323.DimaS)) {
          v323.uWdRT(f51, "Zefoy is unreachable or blocked! (you need proxy/vpn)");
        } else {
          p.stdout.clearLine(0);
          m.stdout.cursorTo(0);
          w.stdout.write(A + " Stopped for reaching the maximum time limit!");
        }
      } else {
        v324 = v323.fSGXW(p, m);
      }
      await v323.ucSAQ(f50, 1000);
    }
  }
}
async function f42(p985, p986 = true) {
  const v332 = {
    vEOkE: function (p987, p988) {
      return p987 + p988;
    },
    qEJuK: " LICENSE IS VERIFIED!",
    ebBHh: function (p989, p990) {
      return p989(p990);
    },
    yEBoG: "--no-sandbox",
    hsofy: "--window-size=900,900",
    HwFxs: "--window-position=200,0",
    YVNQm: "--user-agent=",
    FjCDF: function (p991, p992) {
      return p991 + p992;
    },
    fWJqO: "--proxy-server=",
    MNSJG: function (p993, p994) {
      return p993 === p994;
    },
    SedBK: "YRxhK",
    gShqm: "MczdQ",
    ENbGH: "--disable-gpu",
    FqbiO: "--disable-gpu-compositing",
    VMOGe: "browser-user",
    aBQRT: function (p995, p996) {
      return p995 !== p996;
    },
    BDQKk: "rBMWG",
    owtpF: "domcontentloaded",
    MQlhn: "FUHdX",
    cawiW: function (p997, p998) {
      return p997 === p998;
    },
    MbdbN: "FXsFy",
    gWDMK: "xiOtm",
    EwmyM: "GlXIM"
  };
  let v333 = [v332.yEBoG, v332.hsofy, v332.HwFxs, v332.YVNQm + v71, v332.FjCDF(v332.fWJqO, p985)];
  if (v29) {
    if (v332.MNSJG(v332.SedBK, v332.gShqm)) {
      v332.stdout.clearLine(0);
      v333.stdout.cursorTo(0);
      v334.stdout.write(v335 + "  Check proxies...");
    } else {
      v333 = [...v333, v332.ENbGH, v332.FqbiO];
    }
  }
  const v334 = {
    headless: p986,
    args: v333,
    executablePath: vA0W.browser,
    userDataDir: vA0W[v332.VMOGe]
  };
  const v335 = await a0s.launch(v334);
  try {
    if (v332.aBQRT(v332.BDQKk, "jVfMM")) {
      const v336 = (await v335.pages())[0];
      const v337 = {
        timeout: 10000,
        waitUntil: v332.owtpF
      };
      await v336.goto(v81, v337);
      const v338 = await v336.content();
      if (/_cf_chl_opt/.test(v338)) {
        if (v332.MNSJG(v332.MQlhn, v332.MQlhn)) {
          return true;
        } else {
          const v339 = {
            name: v337.concat
          };
          return v339;
        }
      }
      return false;
    } else {
      p985.log(p986);
      return false;
    }
  } catch (r) {
    if (v332.cawiW(v332.MbdbN, v332.MbdbN)) {
      return false;
    } else if (!v333) {
      K.stdout.clearLine(0);
      I.stdout.cursorTo(0);
      y.stdout.write(v332.vEOkE(Z, v332.qEJuK));
    }
  } finally {
    if (v332.cawiW(v332.gWDMK, v332.EwmyM)) {
      v332.ebBHh(v334, "[" + v335 + "] " + c + " (+" + D + ") [" + K + "] Running: " + I);
    } else {
      await v335.close();
    }
  }
}
async function f43(p999) {
  const v340 = {
    PlCur: function (p1000, p1001) {
      return p1000 - p1001;
    },
    YlPoC: function (p1002, p1003) {
      return p1002(p1003);
    },
    mJuQQ: function (p1004, p1005) {
      return p1004 !== p1005;
    },
    AFEgP: "ohmMW",
    Zlpwj: function (p1006, p1007) {
      return p1006 !== p1007;
    },
    mHFTs: "AIniL",
    XeszT: function (p1008, p1009) {
      return p1008 === p1009;
    },
    Muqff: "jaZnc"
  };
  let v341 = false;
  while (!v341) {
    if (v340.mJuQQ(v340.AFEgP, v340.AFEgP)) {
      const v342 = v340.PlCur(v340, v341);
      m += v342;
    } else {
      const v343 = {
        depth: -1
      };
      const v344 = await p999.getDocument(v343);
      const v345 = {
        nodeId: v344.root.nodeId
      };
      const v346 = await p999.getOuterHTML(v345);
      const v347 = v346.outerHTML;
      if (/Zefoy/.test(v347)) {
        if (v340.Zlpwj("yOhYC", v340.mHFTs)) {
          v341 = true;
        } else {
          v340.YlPoC(p999, v340);
          return null;
        }
      } else if (v340.XeszT(v340.Muqff, "jaZnc")) {
        await new Promise(p1010 => setTimeout(p1010, 1000));
      } else {
        p999 = v340;
      }
    }
  }
  return true;
}
function f44(p1011) {
  return JSON.stringify(p1011.cookies.map(p1012 => ({
    domain: p1012.domain,
    expirationDate: p1012.expires,
    hostOnly: p1012.hostOnly,
    httpOnly: p1012.httpOnly,
    name: p1012.name,
    path: p1012.path,
    sameSite: "unspecified",
    secure: p1012.secure,
    session: p1012.session,
    storeId: "0",
    value: p1012.value
  })));
}
async function f45(p1013) {
  const v348 = {
    uuLnt: function (p1014, p1015) {
      return p1014 + p1015;
    },
    TqPom: " LICENSE IS VERIFIED!",
    rtIHw: "debu",
    bqspp: "gger",
    EZFBc: "stateObject",
    GjCeo: function (p1016, p1017) {
      return p1016 !== p1017;
    },
    mgQXw: "FNelm",
    lgNch: "--proxy-server=",
    cqDog: "--user-agent=",
    YmBtC: function (p1018, p1019) {
      return p1018 === p1019;
    },
    BCIQB: "NAreA",
    MGCgM: "MYPMT",
    hWrMA: "pdEKs",
    jQOEe: function (p1020, p1021) {
      return p1020(p1021);
    },
    woEjA: function (p1022, p1023) {
      return p1022(p1023);
    },
    NtqpN: function (p1024, p1025) {
      return p1024(p1025);
    },
    ILIjL: function (p1026, p1027) {
      return p1026(p1027);
    }
  };
  if (v31) {
    if (v348.GjCeo(v348.mgQXw, v348.mgQXw)) {
      u.stdout.moveCursor(0, -3);
      p1013.stdout.cursorTo(0);
      v348.stdout.clearScreenDown();
    } else {
      console.log(v20);
      process.exit(0);
    }
  }
  let v349 = vA0W.browser || a0G.path;
  let v350 = p1013 ? [v348.lgNch + p1013, v348.uuLnt(v348.cqDog, v71)] : [];
  const v351 = {
    chromePath: v349,
    chromeFlags: v350
  };
  const v352 = await a0t.launch(v351);
  while (true) {
    if (v348.YmBtC(v348.BCIQB, v348.MGCgM)) {
      p1013.stdout.clearLine(0);
      v348.stdout.cursorTo(0);
      v349.stdout.write(v348.uuLnt(v350, v348.TqPom));
    } else {
      try {
        if (v348.GjCeo("pdEKs", v348.hWrMA)) {
          (function () {
            return false;
          }).constructor(ftpJDK.uuLnt(ftpJDK.rtIHw, ftpJDK.bqspp)).apply(ftpJDK.EZFBc);
        } else {
          const v353 = {
            port: v352.port
          };
          const v354 = await v348.jQOEe(a0j, v353);
          const {
            Network: E,
            Page: i,
            Runtime: b,
            DOM: z
          } = v354;
          await b.enable();
          await E.enable();
          await i.enable();
          await i.setLifecycleEventsEnabled({
            enabled: true
          });
          const v356 = {
            url: v81
          };
          await i.navigate(v356);
          await v348.jQOEe(f43, z);
          await v348.woEjA(f50, 1000);
          const v357 = await E.getCookies();
          const v358 = v348.jQOEe(f44, v357);
          await v348.NtqpN(f27, v358);
          await v354.close();
          v352.kill();
          break;
        }
      } catch (P) {
        await v348.ILIjL(f50, 1000);
      }
    }
  }
}
async function f46(p1028 = true) {
  const v359 = {
    cokdc: function (p1029, p1030) {
      return p1029(p1030);
    },
    bTZwA: "eng",
    lPtSY: "--disable-gpu",
    HJCtX: "--disable-gpu-compositing",
    SOljA: function (p1031, p1032) {
      return p1031 !== p1032;
    },
    BZCzJ: "ZgYTm",
    IOUHY: function (p1033) {
      return p1033();
    },
    pZKwC: function (p1034, p1035) {
      return p1034 === p1035;
    },
    CLsLQ: "XpJsS",
    VMcPf: "tqIZj",
    NZZwp: "--no-sandbox",
    bOfre: "--window-size=900,900",
    EYjxk: function (p1036, p1037) {
      return p1036 + p1037;
    },
    kAaAI: "--user-agent=",
    AkScB: function (p1038, p1039) {
      return p1038 + p1039;
    },
    JPtBT: "--proxy-server=",
    AaKwW: "browser-user",
    jeEXs: "JcQXV",
    eKSFP: "JVjjF",
    febpY: function (p1040, p1041) {
      return p1040(p1041);
    },
    ETBpf: function (p1042, p1043) {
      return p1042 === p1043;
    },
    GguIh: "iKzde",
    GlvJo: "wWInl",
    xZOzm: "FQoca",
    xOyTs: function (p1044, p1045) {
      return p1044 === p1045;
    },
    cperU: "bFPOv"
  };
  if (a0L.existsSync(v82)) {
    if (v359.SOljA(v359.BZCzJ, "ZgYTm")) {
      v363.stdout.clearLine(0);
      v364.stdout.cursorTo(0);
      v365.stdout.write(c + " Captcha resolved! (" + D + ")");
    } else {
      const v360 = await v359.IOUHY(f29);
      const v361 = v360.find(p1046 => p1046.name === "user_agent");
      v71 = decodeURIComponent(v361.value);
      const v362 = v360.find(p1047 => p1047.name === "bt_proxy");
      v74 = v362?.value || v74;
    }
  } else if (v359.pZKwC(v359.CLsLQ, v359.VMcPf)) {
    v359.cokdc(o, "Solve captcha automatically...");
  } else {
    console.log("Cloudflare Expired / Zefoy Expired");
    return false;
  }
  let vV742 = v74;
  let v363 = [v359.NZZwp, v359.bOfre, "--window-position=200,0", v359.EYjxk(v359.kAaAI, v71), v359.AkScB(v359.JPtBT, vV742)];
  if (v29) {
    v363 = [...v363, v359.lPtSY, v359.HJCtX];
  }
  const v364 = {
    headless: p1028,
    args: v363,
    executablePath: vA0W.browser,
    userDataDir: vA0W[v359.AaKwW]
  };
  const v365 = await a0s.launch(v364);
  try {
    if (v359.pZKwC(v359.jeEXs, v359.eKSFP)) {
      const v366 = {
        vyczn: function (p1048, p1049) {
          return v359.cokdc(p1048, p1049);
        }
      };
      v359.recognize(vV742, v359.bTZwA).then(({
        data: {
          text: E
        }
      }) => {
        v366.vyczn(v364, E);
      });
    } else {
      const v367 = (await v365.pages())[0];
      const v368 = await v359.IOUHY(f29);
      await v359.febpY(f50, 1000);
      await v367.setCookie(...v368);
      await v367.goto(v81, {
        timeout: 0
      });
      const v370 = await v367.content();
      if (/Zefoy/.test(v370)) {
        if (/submit-captcha/.test(v370)) {
          if (v359.ETBpf(v359.GguIh, v359.GlvJo)) {
            v369 = "";
          } else {
            console.log("Cloudflare Valid / Zefoy Expired");
          }
        } else if (v359.xZOzm !== v359.xZOzm) {
          p1028 = "[32m+" + v359 + "[0m";
        } else {
          console.log("Cloudflare Valid / Zefoy Valid");
        }
        return true;
      }
      console.log("Cloudflare Expired / Zefoy Expired");
      return false;
    }
  } catch (J) {
    console.log(J);
    return false;
  } finally {
    if (v359.xOyTs(v359.cperU, "bFPOv")) {
      await v365.close();
    } else {
      p1028 = [...v359, v359.lPtSY, v359.HJCtX];
    }
  }
}
async function f47(p1050) {
  const v371 = {
    TqjNW: function (p1051, p1052) {
      return p1051(p1052);
    },
    ymYep: function (p1053) {
      return p1053();
    },
    IJRMa: function (p1054) {
      return p1054();
    },
    srjrT: function (p1055, p1056) {
      return p1055 !== p1056;
    },
    PgAdo: "qQBjl",
    HrLmB: function (p1057, p1058) {
      return p1057(p1058);
    },
    dLcZN: "GFnEA",
    JImqe: function (p1059, p1060) {
      return p1059 === p1060;
    },
    Mzgav: "DSTNr",
    YjBaP: function (p1061, p1062) {
      return p1061(p1062);
    }
  };
  try {
    if (v371.srjrT(v371.PgAdo, v371.PgAdo)) {
      DedqKn.TqjNW(v371, "0");
    } else {
      p1050 = await v371.TqjNW(f49, p1050);
      const v372 = v371.HrLmB(a0k, v42 + "/" + p1050);
      if (!v372.ok) {
        if (v371.srjrT(v371.dLcZN, "WIwZT")) {
          return null;
        } else {
          v371.TqjNW(f, v372);
          return null;
        }
      }
      const v373 = v372.json().country;
      return v373;
    }
  } catch (w) {
    if (v371.JImqe(v371.Mzgav, v371.Mzgav)) {
      v371.YjBaP(f51, w);
      return null;
    } else {
      Z.stdout.moveCursor(0, -3);
      r.stdout.clearScreenDown();
      E.stdout.write("\n" + i + "[33m " + b + " [34m[" + z + "][0m " + d + "  [90m(" + v371.ymYep(J) + " /hr " + (v371.IJRMa(X) / 60).toFixed(2) + " hrs)[0m\n\n");
      Y.stdout.write(P + " Waiting: " + N + " mins (ERROR: " + F.substring(0, 24) + ")...");
    }
  }
}
async function f48() {
  const v374 = {
    WprIN: function (p1063, p1064) {
      return p1063(p1064);
    },
    Gmbgt: function (p1065) {
      return p1065();
    },
    OZuDc: function (p1066, p1067) {
      return p1066 === p1067;
    },
    EJYud: "JlFSr",
    RyJlH: function (p1068, p1069) {
      return p1068 === p1069;
    },
    JHPEQ: "KogxR",
    VPJTD: function (p1070, p1071) {
      return p1070 === p1071;
    },
    JQkcL: "wmEyC"
  };
  try {
    if (v374.OZuDc(v374.EJYud, "yBOLv")) {
      f.stdout.moveCursor(0, -9);
      u.stdout.clearScreenDown();
    } else {
      const v375 = v374.WprIN(a0k, v43);
      if (!v375.ok) {
        if (v374.RyJlH("KogxR", v374.JHPEQ)) {
          return null;
        } else {
          v374.WprIN(y, "[" + Z + "] " + r + " (+" + E + ") [" + i + "] Stopped for not accumulating the defined minimum! (in " + v374.Gmbgt(b) + " mins)");
          if (!z) {
            N.stdout.clearLine(0);
            F.stdout.cursorTo(0);
            q.stdout.write(R + " Stopped for not accumulating the defined minimum!");
          }
          P.exit(0);
        }
      }
      const v376 = v375.text();
      return v376;
    }
  } catch (m) {
    if (v374.VPJTD(v374.JQkcL, v374.JQkcL)) {
      v374.WprIN(f51, m);
      return null;
    } else {
      p.stdout.clearLine(0);
      m.stdout.cursorTo(0);
      w.stdout.write(A + " Launch Zefoy in headless browser...");
    }
  }
}
async function f49(p1072) {
  const v377 = {
    Tehkg: function (p1073, p1074) {
      return p1073(p1074);
    },
    VcpBR: function (p1075, p1076) {
      return p1075 !== p1076;
    },
    fwYPh: "OEOhg",
    AmoCL: function (p1077) {
      return p1077();
    }
  };
  if (!p1072) {
    if (v377.VcpBR(v377.fwYPh, v377.fwYPh)) {
      v377.Tehkg(v381, "[" + v382 + "] " + A + " (+" + c + ") " + D);
    } else {
      return await v377.AmoCL(f48);
    }
  }
  const v378 = /^(?:(.*?:.*?@)?([\d.]+)(?::(\d+))?)?$/;
  const v379 = p1072.match(v378);
  const [, v380, v381] = v379 || [];
  const v382 = v380 ? v381.replace(v380 + "@", "") : v381;
  return v382;
}
async function f50(p1078) {
  return new Promise(p1079 => setTimeout(p1079, p1078));
}
function f51(p1080) {
  const v383 = {
    kVBXK: "--disable-gpu",
    pRJUf: "--disable-gpu-compositing",
    jDiUt: function (p1081, p1082) {
      return p1081 === p1082;
    },
    zcTyL: "STZue",
    MDQeC: function (p1083, p1084) {
      return p1083 + p1084;
    },
    dmSoV: "utf8",
    acxPp: function (p1085, p1086) {
      return p1085 === p1086;
    },
    cXvlr: "BYrZZ"
  };
  const vV383 = v383;
  const v384 = new Date().toLocaleString();
  const v385 = "[" + v384 + "] [" + v71?.substring(0, 26) + "...] [" + v70 + "] " + p1080;
  if (v22) {
    if (vV383.jDiUt(vV383.zcTyL, vV383.zcTyL)) {
      a0L.appendFileSync(v37, vV383.MDQeC(v385, "\n"), vV383.dmSoV);
    } else {
      v383("Check browser (" + vV383 + ")...");
    }
  }
  if (v24) {
    if (vV383.acxPp(vV383.cXvlr, "BYrZZ")) {
      console.log(v385);
    } else {
      v383 = [...vV383, vV383.kVBXK, vV383.pRJUf];
    }
  }
}
function f52() {
  const v386 = {
    HyLoh: function (p1087, p1088) {
      return p1087 / p1088;
    },
    UXnob: function (p1089, p1090) {
      return p1089 + p1090;
    },
    twCyx: function (p1091, p1092) {
      return p1091 * p1092;
    },
    KICEF: function (p1093, p1094) {
      return p1093 + p1094;
    },
    JKzNy: function (p1095, p1096) {
      return p1095 * p1096;
    }
  };
  const vV386 = v386;
  return vV386.HyLoh(vV386.UXnob(vV386.twCyx(process.hrtime()[0], 1000000000), process.hrtime()[1]) - vV386.KICEF(vV386.JKzNy(v63[0], 1000000000), v63[1]), 60000000000).toFixed(2);
}
function f53() {
  const v387 = {
    pTkIr: function (p1097, p1098) {
      return p1097 / p1098;
    },
    fLivH: function (p1099) {
      return p1099();
    }
  };
  const v388 = v387.pTkIr(v387.fLivH(f52), 60);
  const v389 = v387.pTkIr(v68, v388);
  return Math.round(v389);
}
function f54(p1100) {
  const v390 = {
    ehMiq: function (p1101, p1102) {
      return p1101 - p1102;
    },
    MRaga: function (p1103, p1104) {
      return p1103 === p1104;
    },
    VXomb: "cFNUL",
    ONxUE: "CnEZG",
    sOTzx: function (p1105, p1106) {
      return p1105 < p1106;
    },
    wHNSN: function (p1107, p1108) {
      return p1107 === p1108;
    },
    rsFty: "xuMWe",
    MVKqo: "qWENA"
  };
  const vV390 = v390;
  return p1100.map(p1109 => {
    if (vV390.MRaga(vV390.VXomb, vV390.ONxUE)) {
      return false;
    } else {
      let v391 = "";
      for (let v392 = 0; vV390.sOTzx(v392, p1109.length); v392 += 2) {
        if (vV390.wHNSN(vV390.rsFty, vV390.MVKqo)) {
          if (v391 === 0) {
            y = Z;
          } else {
            r = vV390.ehMiq(E, v392);
          }
        } else {
          v391 += p1109[v392];
        }
      }
      return v391.split("").reverse().join("");
    }
  });
}
function f55(p1110) {
  const v393 = {
    teRsE: function (p1111, p1112) {
      return p1111(p1112);
    },
    taSOS: function (p1113, p1114) {
      return p1113 === p1114;
    },
    fXJcp: "sxeLU",
    pfDYm: "UFzgl",
    pfvmd: function (p1115, p1116) {
      return p1115 !== p1116;
    },
    SpAsQ: "ZjtWE",
    yMeaR: "VDdMH",
    NvVPF: "BeUNB",
    TUFXu: function (p1117, p1118) {
      return p1117(p1118);
    }
  };
  try {
    if (v393.taSOS(v393.fXJcp, v393.pfDYm)) {
      v393.log("Cloudflare Valid / Freer Valid");
    } else {
      const v394 = v393.teRsE(a0k, p1110);
      const v395 = v394.text();
      const v396 = v395.match(/"liveRoomStats":\s*{\s*"userCount":\s*(\d+)/);
      if (v396) {
        if (v393.pfvmd(v393.SpAsQ, v393.yMeaR)) {
          const v397 = v393.teRsE(parseInt, v396[1]);
          return v397;
        } else {
          v393.teRsE(f, "Captcha resolved! (" + v394 + ")");
        }
      }
    }
  } catch (c) {
    if (v393.taSOS("BeUNB", v393.NvVPF)) {
      v393.TUFXu(f51, c);
      return null;
    } else {
      p.stdout.clearLine(0);
      m.stdout.cursorTo(0);
      w.stdout.write(A + "  Do not use proxy!");
    }
  }
}
async function f56(p1119) {
  const v398 = {
    ICMgm: function (p1120, p1121) {
      return p1120 && p1121;
    },
    zVtRC: function (p1122, p1123) {
      return p1122 + p1123;
    },
    RrKeX: function (p1124, p1125) {
      return p1124 + p1125;
    },
    OiVuJ: function (p1126, p1127) {
      return p1126(p1127);
    },
    XbgzC: function (p1128, p1129) {
      return p1128(p1129);
    },
    XpmzR: function (p1130, p1131) {
      return p1130 !== p1131;
    },
    rglHM: "qkwsB",
    fQuZp: function (p1132, p1133) {
      return p1132(p1133);
    },
    XLzrx: "UBRpc",
    twSYO: function (p1134, p1135) {
      return p1134 !== p1135;
    },
    jUqpl: "xKZIQ",
    BqErj: "wLqMU",
    mxKFX: function (p1136, p1137) {
      return p1136(p1137);
    },
    BWyso: "aVfpw",
    mIBMb: function (p1138, p1139) {
      return p1138 === p1139;
    },
    SOAGM: "omkmc"
  };
  try {
    if (v398.XpmzR(v398.rglHM, "dCOST")) {
      const v399 = v398.fQuZp(a0k, p1119);
      if (!v399.ok) {
        if (v398.XLzrx !== "UBRpc") {
          m.stdout.clearLine(0);
          w.stdout.cursorTo(0);
          A.stdout.write(c + " SESSID: " + D);
        } else {
          return null;
        }
      }
      const v400 = v399.text();
      const v401 = v400.match(/"stats":\s*{\s*"diggCount":(\d+),\s*"shareCount":(\d+),\s*"commentCount":(\d+),\s*"playCount":(\d+),\s*"collectCount":"(\d+)"\s*}/);
      if (v401) {
        if (v398.twSYO(v398.jUqpl, v398.BqErj)) {
          const [, v402, v403, v404, v405, v406] = v401;
          return {
            diggCount: v398.mxKFX(parseInt, v402),
            shareCount: v398.fQuZp(parseInt, v403),
            commentCount: v398.XbgzC(parseInt, v404),
            playCount: v398.OiVuJ(parseInt, v405),
            collectCount: v398.fQuZp(parseInt, v406)
          };
        } else {
          v398.log("\n\n");
        }
      } else if (v398.twSYO(v398.BWyso, "aVfpw")) {
        if (v398.ICMgm(!A, !c)) {
          r.stdout.clearLine(1);
          E.stdout.cursorTo(0);
          i.stdout.write(v398.zVtRC(v398.RrKeX(b, " Chrome/Chromium executable is valid!"), " ".repeat(17)));
        } else {
          v398.OiVuJ(z, "Chrome/Chromium executable is valid!");
        }
      } else {
        return null;
      }
    } else {
      v398.XbgzC(v398, "Chrome/Chromium executable is invalid!");
    }
  } catch (r) {
    if (v398.mIBMb(v398.SOAGM, v398.SOAGM)) {
      v398.mxKFX(f51, r);
      return null;
    } else {
      m.stdout.clearLine(0);
      w.stdout.cursorTo(0);
      A.stdout.write(c + " Cookies injected! (" + D + ")");
    }
  }
}
async function f57(p1140) {
  const v407 = {
    LUeGY: function (p1141, p1142) {
      return p1141 + p1142;
    },
    OtJXP: "utf8",
    JNibe: function (p1143, p1144) {
      return p1143 !== p1144;
    },
    RCQUf: "KlVtF",
    EeDYo: function (p1145, p1146) {
      return p1145(p1146);
    },
    QstKX: function (p1147, p1148) {
      return p1147 === p1148;
    },
    apReZ: "kniGy",
    AoiRS: "GUnxz",
    Ewkan: "ZHhzc",
    nKEML: "QzcSE"
  };
  try {
    if (v407.JNibe(v407.RCQUf, v407.RCQUf)) {
      v407 = false;
    } else {
      const v408 = v407.EeDYo(a0k, p1140);
      if (!v408.ok) {
        if (v407.QstKX("TGpDA", v407.apReZ)) {
          const v409 = new D().toLocaleString();
          const v410 = "[" + v409 + "] [" + K?.substring(0, 26) + "...] [" + I + "] " + y;
          if (Z) {
            z.appendFileSync(d, v407.LUeGY(v410, "\n"), v407.OtJXP);
          }
          if (i) {
            J.log(v410);
          }
        } else {
          return null;
        }
      }
      const v411 = v408.text();
      const v412 = v411.match(/"canonical":"https:\\u002F\\u002Fwww\.tiktok\.com\\u002F@\w+\\u002F(?:video|photo)\\u002F(\d+)"/);
      if (v412 && v412[1]) {
        if (v407.QstKX(v407.AoiRS, v407.Ewkan)) {
          f = v408;
        } else {
          return v412[1];
        }
      } else if (v407.nKEML === "rQEDX") {
        if (/submit-captcha/.test(v408)) {
          w.log("Cloudflare Valid / Zefoy Expired");
        } else {
          A.log("Cloudflare Valid / Zefoy Valid");
        }
        return true;
      } else {
        return null;
      }
    }
  } catch (D) {
    v407.EeDYo(f51, D);
    return null;
  }
}
async function f58(p1149) {
  const v413 = {
    ROuMr: function (p1150, p1151) {
      return p1150 && p1151;
    },
    xCNyc: function (p1152, p1153) {
      return p1152 + p1153;
    },
    DuiEW: function (p1154, p1155) {
      return p1154 + p1155;
    },
    FWPKv: function (p1156, p1157) {
      return p1156(p1157);
    },
    RunjM: "VUmgQ",
    TKpUq: "LFpyr",
    pRiAh: function (p1158, p1159, p1160) {
      return p1158(p1159, p1160);
    },
    MovIR: "https://livecounts.io",
    TXCWi: function (p1161, p1162) {
      return p1161 === p1162;
    },
    ZkYgQ: "ZdNes",
    JkbuH: "LyMLR"
  };
  try {
    if (v413.RunjM === v413.TKpUq) {
      if (v413.ROuMr(!A, !c)) {
        r.stdout.clearLine(1);
        E.stdout.cursorTo(0);
        i.stdout.write(v413.xCNyc(v413.DuiEW(b, " Chrome/Chromium executable is valid!"), " ".repeat(17)));
      } else {
        v413.FWPKv(z, "Chrome/Chromium executable is valid!");
      }
    } else {
      const v414 = await v413.FWPKv(f57, p1149);
      const v415 = v413.pRiAh(a0k, v45 + v414, {
        headers: {
          origin: v413.MovIR,
          referer: "https://livecounts.io/",
          "user-agent": v71
        }
      });
      if (!v415.ok) {
        return null;
      }
      const v416 = v415.json();
      const v417 = {
        playCount: v416.viewCount,
        diggCount: v416.likeCount,
        commentCount: v416.commentCount,
        shareCount: v416.shareCount
      };
      return v417;
    }
  } catch (c) {
    if (v413.TXCWi(v413.ZkYgQ, v413.JkbuH)) {
      return p1149[0].word;
    } else {
      v413.FWPKv(f51, c);
      return null;
    }
  }
}
async function f59(p1163) {
  const v418 = {
    eWsuE: function (p1164, p1165) {
      return p1164 / p1165;
    },
    aOXOs: function (p1166) {
      return p1166();
    },
    doZpK: function (p1167, p1168) {
      return p1167 / p1168;
    },
    frgxj: function (p1169, p1170) {
      return p1169 === p1170;
    },
    FrQDY: "wsBqc",
    TGFQi: function (p1171, p1172) {
      return p1171(p1172);
    },
    qPqsz: "CgjBp",
    ltTrX: function (p1173, p1174) {
      return p1173(p1174);
    },
    lGGLR: function (p1175, p1176) {
      return p1175(p1176);
    },
    IfzSo: function (p1177, p1178) {
      return p1177(p1178);
    },
    JvVOT: function (p1179, p1180) {
      return p1179 !== p1180;
    },
    wwEGS: "AWymx",
    rEakX: "PiFvt",
    stTPh: function (p1181, p1182) {
      return p1181(p1182);
    }
  };
  try {
    if (v418.frgxj(v418.FrQDY, v418.FrQDY)) {
      const v419 = v418.TGFQi(a0k, p1163);
      if (!v419.ok) {
        return null;
      }
      const v420 = v419.text();
      const v421 = v420.match(/"stats":\s*{\s*"followerCount":(\d+),\s*"followingCount":(\d+),\s*"heart":(\d+),\s*"heartCount":(\d+),\s*"videoCount":(\d+),\s*"diggCount":(\d+),\s*"friendCount":(\d+)\s*}/);
      if (v421) {
        if (v418.qPqsz !== "CgjBp") {
          return null;
        } else {
          const [, v422, v423, v424, v425, v426, v427, v428] = v421;
          return {
            followerCount: v418.TGFQi(parseInt, v422),
            followingCount: v418.ltTrX(parseInt, v423),
            heart: v418.TGFQi(parseInt, v424),
            heartCount: v418.ltTrX(parseInt, v425),
            videoCount: v418.lGGLR(parseInt, v426),
            diggCount: v418.lGGLR(parseInt, v427),
            friendCount: v418.IfzSo(parseInt, v428)
          };
        }
      } else if (v418.JvVOT(v418.wwEGS, v418.wwEGS)) {
        v421.stdout.clearLine(0);
        m.stdout.cursorTo(0);
        w.stdout.write(A + " Accumulation limit reached!");
      } else {
        return null;
      }
    } else {
      if (/Security Check/.test(u)) {
        w.log("Cloudflare Valid / Freer Expired");
      } else {
        A.log("Cloudflare Valid / Freer Valid");
      }
      return true;
    }
  } catch (E) {
    if (v418.JvVOT(v418.rEakX, "SBpum")) {
      v418.stTPh(f51, E);
      return null;
    } else {
      const v429 = v418.eWsuE(v418.aOXOs(u), 60);
      const v430 = v418.doZpK(p, v429);
      return m.round(v430);
    }
  }
}
async function f60(p1183) {
  const v431 = {
    Jxocj: function (p1184, p1185) {
      return p1184 !== p1185;
    },
    jKfIT: "uJbTF",
    THGEn: function (p1186, p1187) {
      return p1186 + p1187;
    },
    yKZWO: function (p1188, p1189) {
      return p1188 > p1189;
    },
    lpHsb: function (p1190, p1191) {
      return p1190 === p1191;
    },
    xALqm: "gjVyn",
    sfPLg: "rzUry",
    kLsJj: "SwycN",
    GSFfU: function (p1192, p1193) {
      return p1192(p1193);
    }
  };
  try {
    if (v431.Jxocj(v431.jKfIT, v431.jKfIT)) {
      return null;
    } else {
      const vA0k = a0k(v431.THGEn(v44, p1183));
      const v432 = vA0k.json();
      if (v431.yKZWO(v432.length, 0)) {
        if (v431.lpHsb(v431.xALqm, v431.sfPLg)) {
          v432.stdout.clearLine(0);
          m.stdout.cursorTo(0);
          w.stdout.write(A + " Zefoy is accessible! :)");
        } else {
          return v432[0].word;
        }
      } else if (v431.Jxocj(v431.kLsJj, "RUusu")) {
        return p1183;
      } else {
        f.log("Video:[36m " + vA0k.video + " [0m");
      }
    }
  } catch (A) {
    v431.GSFfU(f51, A);
    return p1183;
  }
}
async function f61(p1194) {
  const v433 = {
    cXOKd: function (p1195, p1196) {
      return p1195(p1196);
    },
    hNtrN: function (p1197, p1198, p1199) {
      return p1197(p1198, p1199);
    }
  };
  const v434 = v433.cXOKd(promisify, a0L.access);
  try {
    await v433.hNtrN(v434, p1194, a0L.constants.X_OK);
    return true;
  } catch {
    return false;
  }
}
async function f62(p1200 = true) {
  const v435 = {
    sOfRL: "Freer",
    fqHHj: function (p1201, p1202) {
      return p1201 === p1202;
    },
    gUxaq: "cookies.json",
    mqqju: "cookies2.json",
    jXDTu: function (p1203) {
      return p1203();
    },
    DNmgj: function (p1204, p1205) {
      return p1204(p1205);
    },
    zshuk: function (p1206, p1207) {
      return p1206(p1207);
    },
    Kjtnf: function (p1208, p1209, p1210, p1211) {
      return p1208(p1209, p1210, p1211);
    }
  };
  v81 = v33;
  vA0W.provider = v435.sOfRL;
  v82 = v435.fqHHj(vA0W.cookies, v435.gUxaq) ? v435.mqqju : vA0W.cookies;
  let v436 = await v435.jXDTu(f63);
  let v437 = await v435.DNmgj(f68, v436);
  if (!v437) {
    await v435.zshuk(f62, false);
    return;
  }
  const v438 = await f17();
  await v435.Kjtnf(f69, v437, v438, v436);
}
async function f63(p1212 = null) {
  const v439 = {
    ZGmLo: "0|1|2|3|4",
    kdhRb: function (p1213, p1214) {
      return p1213(p1214);
    },
    tzrCQ: function (p1215, p1216) {
      return p1215 === p1216;
    },
    UUaPT: "terminal-captcha",
    MvGio: function (p1217, p1218) {
      return p1217(p1218);
    },
    pjvcz: function (p1219) {
      return p1219();
    },
    CZISS: function (p1220, p1221) {
      return p1220(p1221);
    },
    OlbHD: function (p1222) {
      return p1222();
    }
  };
  try {
    if (!a0L.existsSync(v82)) {
      const v440 = v439.ZGmLo.split("|");
      let v441 = 0;
      while (true) {
        switch (v440[v441++]) {
          case "0":
            if (!v72) {
              v72 = await v439.kdhRb(f35, v26);
            }
            continue;
          case "1":
            p1212 = (await v72.pages())[0];
            continue;
          case "2":
            await p1212.goto(v81, {
              timeout: 0
            });
            continue;
          case "3":
            await f50(3000);
            continue;
          case "4":
            if (v439.tzrCQ(vA0W[v439.UUaPT], "")) {
              await v439.kdhRb(f65, p1212);
            } else {
              await v439.kdhRb(f66, p1212);
            }
            continue;
        }
        break;
      }
    }
    if (!p1212) {
      if (v72) {
        p1212 = (await v72.pages())[0];
      } else {
        v72 = await v439.kdhRb(f35, v26);
        p1212 = (await v72.pages())[0];
      }
      await p1212.goto(v81, {
        timeout: 0
      });
    }
    return await v439.MvGio(f64, p1212);
  } catch (c) {
    await v439.pjvcz(f28);
    await v439.CZISS(f50, 1000);
    return await v439.OlbHD(f63);
  }
}
async function f64(p1223) {
  const v444 = {
    jtOxf: function (p1224, p1225) {
      return p1224 && p1225;
    },
    rYAuE: function (p1226, p1227) {
      return p1226(p1227);
    },
    SKbjU: function (p1228) {
      return p1228();
    },
    lJexE: function (p1229, p1230) {
      return p1229(p1230);
    },
    ZBLyh: function (p1231, p1232) {
      return p1231 && p1232;
    },
    AGjtB: function (p1233, p1234) {
      return p1233(p1234);
    },
    mTjAZ: function (p1235, p1236) {
      return p1235(p1236);
    },
    VIgfP: function (p1237, p1238) {
      return p1237 === p1238;
    },
    Vxfrc: "terminal-captcha",
    WeNXk: function (p1239, p1240) {
      return p1239(p1240);
    }
  };
  if (v444.jtOxf(!v24, !v27)) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(v53 + " Launch " + vA0W.provider + " in headless browser...");
  } else {
    v444.rYAuE(f51, "Launch " + vA0W.provider + " in headless browser...");
  }
  await v444.rYAuE(f50, 1000);
  const v445 = await v444.SKbjU(f29);
  const v446 = v445.find(p1241 => p1241.name === "PHPSESSID");
  v70 = v446 ? v446.value : "";
  if (v444.jtOxf(!v24, !v27)) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(v53 + " SESSID: " + v70);
  } else {
    v444.lJexE(f51, "SESSID: " + v70);
  }
  await v444.rYAuE(f50, 1000);
  await p1223.setCookie(...v445);
  await p1223.goto(v81, {
    timeout: 0
  });
  if (v444.ZBLyh(!v24, !v27)) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(v54 + " Cookies injected! (" + v82 + ")");
  } else {
    v444.AGjtB(f51, "Cookies injected! (" + v82 + ")");
  }
  v444.AGjtB(f51, "Load session (SESSID: " + v70 + ")...");
  await v444.mTjAZ(f50, 3000);
  const v448 = await p1223.content();
  if (/Security Check/.test(v448)) {
    if (v444.VIgfP(vA0W[v444.Vxfrc], "")) {
      await v444.WeNXk(f65, p1223);
    } else {
      await v444.WeNXk(f66, p1223);
    }
  }
  return p1223;
}
async function f65(p1242) {
  const v449 = {
    mbQeo: function (p1243, p1244) {
      return p1243(p1244);
    },
    qGMCL: function (p1245, p1246) {
      return p1245(p1246);
    },
    kJjVq: "input",
    FPFhV: "captcha",
    XOEGL: "Write a Captcha:",
    wxBNs: "input[type=text]",
    hqFBU: function (p1247, p1248) {
      return p1247 || p1248;
    },
    tezEo: function (p1249, p1250) {
      return p1249(p1250);
    },
    zEhsr: function (p1251, p1252) {
      return p1251(p1252);
    },
    gAuUf: function (p1253, p1254) {
      return p1253(p1254);
    },
    sQqif: function (p1255, p1256) {
      return p1255(p1256);
    },
    VBbJo: function (p1257, p1258) {
      return p1257(p1258);
    }
  };
  if (!v24) {
    process.stdout.cursorTo(0);
    process.stdout.write(v57 + " Solve the captcha manually...");
  } else {
    v449.mbQeo(f51, "Solve the captcha manually...");
  }
  await p1242.evaluate("(() => {\n      const button = document.querySelector(\"button.fc-button.fc-cta-consent.fc-primary-button\");\n      if (button) {\n        button.click();\n      }\n    })();");
  await v449.qGMCL(f50, 1000);
  const v450 = await p1242.evaluate("(() => {\n      const img = document.querySelector('img.card-img-top');\n      if (img) {\n        const rect = img.getBoundingClientRect();\n        return {\n          top: rect.top,\n          left: rect.left,\n          width: img.width,\n          height: img.height\n        };\n      }\n    })();");
  const v451 = {
    x: v450.left,
    y: v450.top,
    width: v450.width,
    height: v450.height
  };
  const v452 = {
    path: v34,
    clip: v451
  };
  await p1242.screenshot(v452);
  await v449.mbQeo(f50, 200);
  await v449.mbQeo(f67, v34);
  if (!v24) {
    console.log("\n");
    console.log(await a0C.file(v34, {
      width: 64
    }));
  }
  const v454 = {
    type: v449.kJjVq,
    name: v449.FPFhV,
    message: v449.XOEGL
  };
  const v455 = await a0g.prompt([v454]);
  const v456 = v455.captcha;
  await a0L.promises.unlink(v34);
  await p1242.waitForSelector(v449.wxBNs);
  await p1242.$eval(v449.wxBNs, (p1259, p1260) => p1259.value = p1260, v456);
  await p1242.evaluate("(() => {\n      document\n        .querySelector(\"button.btn.btn-dark.btn-lg.btn-block\")\n        .click();\n    })();");
  if (!v24) {
    process.stdout.moveCursor(0, v449.hqFBU(v30, v31) ? -22 : -23);
    process.stdout.clearScreenDown();
  }
  await v449.tezEo(f50, 1000);
  const v457 = await p1242.evaluate("(() => {\n      return document.querySelector(\"button.btn.btn-primary\") ? 1 : 0;\n    })();");
  if (v457) {
    if (!v24) {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(v55 + " Captcha resolved! (" + v456 + ")");
    } else {
      v449.qGMCL(f51, "Captcha resolved! (" + v456 + ")");
    }
    const v458 = await p1242.cookies();
    await v449.zEhsr(f26, v458);
    await v449.gAuUf(f50, 2000);
  } else {
    if (!v24) {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(v56 + " Wrong captcha! (" + v456 + ")");
    } else {
      v449.sQqif(f51, "Wrong captcha! (" + v456 + ")");
    }
    await v449.VBbJo(f50, 2000);
    await v449.tezEo(f65, p1242);
  }
}
async function f66(p1261) {
  const v459 = {
    pZmou: function (p1262, p1263) {
      return p1262 + p1263;
    },
    WzHKC: function (p1264, p1265) {
      return p1264 && p1265;
    },
    vxWcN: " Solve captcha automatically...",
    UGoYp: function (p1266, p1267) {
      return p1266(p1267);
    },
    GoSpR: function (p1268, p1269) {
      return p1268(p1269);
    },
    vumHU: function (p1270, p1271) {
      return p1270(p1271);
    },
    lelgE: "input[type=text]",
    JHAVl: function (p1272, p1273) {
      return p1272(p1273);
    },
    gTbGU: function (p1274, p1275) {
      return p1274(p1275);
    },
    PvJbh: function (p1276, p1277) {
      return p1276(p1277);
    },
    YHlee: function (p1278, p1279) {
      return p1278(p1279);
    }
  };
  const v460 = v459.pZmou(Math.random().toString(36).substring(2, 10), "-");
  if (v459.WzHKC(!v24, !v27)) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(v60 + v459.vxWcN);
  } else {
    v459.UGoYp(f51, "Solve captcha automatically...");
  }
  await p1261.evaluate("(() => {\n      const button = document.querySelector(\"button.fc-button.fc-cta-consent.fc-primary-button\");\n      if (button) {\n        button.click();\n      }\n    })();");
  await v459.UGoYp(f50, 1000);
  const v461 = await p1261.evaluate("(() => {\n      const img = document.querySelector('img.card-img-top');\n      if (img) {\n        const rect = img.getBoundingClientRect();\n        return {\n          top: rect.top,\n          left: rect.left,\n          width: img.width,\n          height: img.height\n        };\n      }\n    })();");
  const v462 = {
    x: v461.left,
    y: v461.top,
    width: v461.width,
    height: v461.height
  };
  await p1261.screenshot({
    path: v459.pZmou(v460, v34),
    clip: v462
  });
  await v459.GoSpR(f50, 200);
  await v459.vumHU(f67, v459.pZmou(v460, v34));
  const v463 = await v459.UGoYp(f60, (await v459.GoSpR(f12, v460 + v34)).replace(/(\r\n|\n|\r| )/gm, ""));
  await a0L.promises.unlink(v459.pZmou(v460, v34));
  await p1261.waitForSelector(v459.lelgE);
  await p1261.$eval(v459.lelgE, (p1280, p1281) => p1280.value = p1281, v463);
  await p1261.evaluate("(() => {\n      document\n        .querySelector(\"button.btn.btn-dark.btn-lg.btn-block\")\n        .click();\n    })();");
  await v459.GoSpR(f50, 1000);
  const v464 = await p1261.evaluate("(() => {\n      return document.querySelector(\"button.btn.btn-primary\") ? 1 : 0;\n    })();");
  if (v464) {
    if (v459.WzHKC(!v24, !v27)) {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(v55 + " Captcha resolved! (" + v463 + ")");
    } else {
      v459.JHAVl(f51, "Captcha resolved! (" + v463 + ")");
    }
    const v465 = await p1261.cookies();
    await v459.gTbGU(f26, v465);
    await v459.UGoYp(f50, 2000);
  } else {
    if (v459.WzHKC(!v24, !v27)) {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(v56 + " Wrong captcha! (" + v463 + ")");
    } else {
      v459.UGoYp(f51, "Wrong captcha! (" + v463 + ")");
    }
    await v459.PvJbh(f50, 2000);
    await v459.YHlee(f66, p1261);
  }
}
async function f67(p1282) {
  const v466 = {
    VNOsL: function (p1283, p1284) {
      return p1283 + p1284;
    },
    dbSUa: function (p1285, p1286) {
      return p1285 - p1286;
    },
    BUqaY: function (p1287, p1288) {
      return p1287 - p1288;
    },
    ezvye: function (p1289, p1290) {
      return p1289 > p1290;
    },
    NieON: "Error processing image:"
  };
  const vV466 = v466;
  const v467 = 20;
  const v468 = 4294967295;
  try {
    const v469 = await a0Q.read(p1282);
    v469.scan(0, 0, v469.bitmap.width, v469.bitmap.height, function (p1291, p1292, p1293) {
      const v470 = a0Q.intToRGBA(v469.getPixelColor(p1291, p1292));
      const v471 = vV466.VNOsL(Math.abs(v470.r - v470.g) + Math.abs(vV466.dbSUa(v470.g, v470.b)), Math.abs(vV466.BUqaY(v470.r, v470.b)));
      if (vV466.ezvye(v471, v467)) {
        v469.setPixelColor(v468, p1291, p1292);
      }
    });
    await v469.writeAsync(p1282);
  } catch (A) {
    console.error(vV466.NieON, A);
  }
}
async function f68(p1294) {
  const v472 = {
    OMchV: ".card-body.p-1 > small",
    ispfF: function (p1295, p1296) {
      return p1295 === p1296;
    },
    kNtae: "Up ",
    aHEKl: "Back",
    ykuoa: "list",
    ZPjdY: "mode",
    unNIb: "What task do you want me to do?",
    Wabig: function (p1297, p1298) {
      return p1297 === p1298;
    },
    dJxoZ: function (p1299) {
      return p1299();
    }
  };
  await p1294.waitForSelector(v472.OMchV);
  let v473 = await p1294.evaluate("(() => {\n      let choices = Array.from(document.querySelectorAll(\".card-body.p-1 > small\"));\n      choices = choices.map((c) => {\n        const parts = c.innerText.replace(" + /(\r\n|\n|\r|:)/gm + ", \" \").split(\"  \");\n        return {\n          name: 'Up ' + parts[0].replace(\"views\", \"Views\").replace(\"hearts\", \"Hearts\").replace(\"Comment\", \"Comments\"),\n          disabled:" + /soon/ + ".test(parts[1]) ? true : false,\n        };\n      });\n      return choices.filter((c) => !c.disabled);\n    })();");
  if (v472.ispfF(v473[0].name, v472.kNtae)) {
    return false;
  }
  const v474 = {
    name: v472.aHEKl
  };
  v473.push(v474);
  if (!v24) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
  }
  if (vA0W.task) {
    return vA0W.task;
  } else {
    const v475 = {
      type: v472.ykuoa,
      name: v472.ZPjdY,
      message: v472.unNIb,
      choices: v473
    };
    const v476 = await a0g.prompt([v475]);
    if (v472.Wabig(await v476.mode, v472.aHEKl)) {
      if (!v24) {
        process.stdout.moveCursor(0, -2);
        process.stdout.clearScreenDown();
      }
      await v472.dJxoZ(f2);
    }
    return v476.mode;
  }
}
async function f69(p1300, p1301, p1302, p1303 = false) {
  const v477 = {
    ICRba: function (p1304, p1305) {
      return p1304 != p1305;
    },
    ermqY: "input.form-control.form-control-lg",
    MpHhu: "Up Hearts",
    xSNxR: "button[data-type=\"hearts\"]",
    ezoZn: "Up Comments Hearts",
    VFCfB: "button[data-type=\"com_op\"]",
    rXkoB: "Up Views",
    NAPdO: "button[data-type=\"views\"]",
    tqHBs: "Up Shares",
    ZZOfU: "button[data-type=\"shares\"]",
    tJSxX: "Up Favorites",
    SPLnM: "button[data-type=\"favorites\"]",
    kfnfG: "Up Live Views",
    ItqdM: function (p1306, p1307) {
      return p1306 && p1307;
    },
    MrWkm: function (p1308, p1309) {
      return p1308(p1309);
    },
    osaaG: function (p1310, p1311, p1312, p1313, p1314) {
      return p1310(p1311, p1312, p1313, p1314);
    },
    rRIMM: function (p1315, p1316, p1317, p1318, p1319) {
      return p1315(p1316, p1317, p1318, p1319);
    },
    EwNGD: "1|4|2|6|3|0|5",
    BgwLm: function (p1320, p1321, p1322, p1323, p1324) {
      return p1320(p1321, p1322, p1323, p1324);
    },
    DuRwg: function (p1325) {
      return p1325();
    }
  };
  try {
    v63 = v63 || process.hrtime();
    await p1302.evaluate("(() => {\n        var modeBtn = document.querySelector('button.btn.btn-primary');\n        if (modeBtn) {\n          modeBtn.click();\n        }\n      })();");
    let v478 = await p1302.evaluate("(() => {\n        var infoElement = document.querySelector('.modal.show')\n        if (infoElement) {\n          return infoElement.innerText;\n        }\n        return \"\";\n      })();");
    if (v477.ICRba(v478, "")) {
      await p1302.waitForSelector(v477.ermqY);
      await p1302.$eval(v477.ermqY, (p1326, p1327) => p1326.value = p1327, p1301);
      await p1302.evaluate("(() => {\n          document\n            .querySelector(\"button.btn.btn-outline-secondary\")\n            .click();\n        })();");
    }
    const v479 = new Map([[v477.MpHhu, v477.xSNxR], [v477.ezoZn, v477.VFCfB], [v477.rXkoB, v477.NAPdO], [v477.tqHBs, v477.ZZOfU], [v477.tJSxX, v477.SPLnM], [v477.kfnfG, v477.NAPdO]]);
    let v480 = v477.NAPdO;
    if (v479.has(p1300)) {
      v480 = v479.get(p1300);
    }
    if (v477.ItqdM(!p1303, !v24)) {
      console.log("\n\n");
    }
    v477.MrWkm(f51, p1300 + " task running...");
    v64 = await v477.osaaG(f71, p1302, v480, p1300, p1301);
    v65 = await v477.rRIMM(f72, p1302, v480, p1300, p1301);
  } catch (D) {
    const v481 = v477.EwNGD.split("|");
    let v482 = 0;
    while (true) {
      switch (v481[v482++]) {
        case "0":
          v477.BgwLm(f69, p1300, p1301, p1302, true);
          continue;
        case "1":
          v477.MrWkm(f51, D);
          continue;
        case "2":
          await v477.MrWkm(f50, 2000);
          continue;
        case "3":
          await p1302.goto(v81, {
            timeout: 0
          });
          continue;
        case "4":
          await v477.DuRwg(f28);
          continue;
        case "5":
          return;
        case "6":
          p1302 = await v477.MrWkm(f63, p1302);
          continue;
      }
      break;
    }
  }
}
async function f70(p1328, p1329, p1330, p1331) {
  const v484 = {
    KDqIB: function (p1332, p1333) {
      return p1332(p1333);
    },
    qztPI: function (p1334, p1335) {
      return p1334(p1335);
    },
    bxERR: function (p1336, p1337) {
      return p1336(p1337);
    },
    MXPxb: function (p1338, p1339) {
      return p1338(p1339);
    },
    itINa: function (p1340, p1341) {
      return p1340 > p1341;
    },
    CXhlZ: function (p1342) {
      return p1342();
    },
    QJJAl: function (p1343, p1344) {
      return p1343(p1344);
    },
    CLKYq: function (p1345, p1346, p1347, p1348, p1349) {
      return p1345(p1346, p1347, p1348, p1349);
    },
    lLqFz: function (p1350, p1351, p1352) {
      return p1350(p1351, p1352);
    }
  };
  return v484.lLqFz(setInterval, async () => {
    const v485 = await p1328.content();
    if (/Something went wrong/.test(v485)) {
      v484.KDqIB(clearInterval, v64);
      v484.qztPI(clearInterval, v65);
      v484.bxERR(clearInterval, v66);
      let v486 = await v484.MXPxb(f47, v74);
      let v487 = "";
      if (v484.itINa(v68, 0)) {
        v487 = "[32m+" + v68 + "[0m";
      } else {
        v487 = "";
      }
      await v484.CXhlZ(f28);
      await v484.QJJAl(f50, 2000);
      if (!v24) {
        process.stdout.moveCursor(0, -3);
        process.stdout.clearScreenDown();
        process.stdout.write("\n" + v48 + "[33m " + p1330 + " [34m[" + v486 + "][0m " + v487 + "  [90m(" + v484.CXhlZ(f53) + " /hr " + (v484.CXhlZ(f52) / 60).toFixed(2) + " hrs)[0m\n\n");
        process.stdout.write(v49 + " Running: Trying again (ERROR: " + info.substring(0, 24) + ")...");
      }
      v484.QJJAl(f51, "Trying again (ERROR: " + info + ")...");
      p1328 = await v484.MXPxb(f63, p1328);
      await p1328.goto(v81, {
        timeout: 0
      });
      v484.CLKYq(f22, p1330, p1331, p1328, true);
      return;
    }
  }, 20000);
}
async function f71(p1353, p1354, p1355, p1356, p1357 = null) {
  const v489 = {
    BNjJu: "You are using the FREE version limited to ~5000\n",
    SUJAf: "accumulations. The advantage of acquiring the\n",
    OAnNF: "license is that the bot continues to work\n",
    gNkfw: "indefinitely and accumulates large amounts.\n",
    waVyj: function (p1358, p1359) {
      return p1358 !== p1359;
    },
    ggfDA: "Up Comments Hearts",
    VeuSJ: function (p1360, p1361) {
      return p1360(p1361);
    },
    xfmaS: "en-US",
    xcbgX: function (p1362, p1363) {
      return p1362 === p1363;
    },
    KVomW: "7|2|3|4|5|1|0|6",
    NHvVM: function (p1364, p1365, p1366, p1367, p1368, p1369) {
      return p1364(p1365, p1366, p1367, p1368, p1369);
    },
    EFobq: function (p1370, p1371, p1372, p1373, p1374, p1375) {
      return p1370(p1371, p1372, p1373, p1374, p1375);
    },
    uZCDZ: function (p1376, p1377) {
      return p1376(p1377);
    },
    rPEcM: function (p1378, p1379) {
      return p1378 > p1379;
    },
    yiQCe: "3|2|4|1|0",
    YsKQm: function (p1380, p1381) {
      return p1380 !== p1381;
    },
    nTizX: function (p1382, p1383) {
      return p1382 - p1383;
    },
    HKmYE: function (p1384, p1385) {
      return p1384 - p1385;
    },
    uuGGs: function (p1386, p1387) {
      return p1386 || p1387;
    },
    ujBmV: "Up Live Views",
    vshUR: function (p1388, p1389) {
      return p1388 === p1389;
    },
    mkahC: "Up Hearts",
    lwpeH: function (p1390, p1391) {
      return p1390 >= p1391;
    },
    jjkGj: function (p1392, p1393) {
      return p1392(p1393);
    },
    zRLBp: "Up Views",
    RgKEJ: function (p1394, p1395) {
      return p1394 >= p1395;
    },
    FEHIR: function (p1396, p1397) {
      return p1396 === p1397;
    },
    ipAtl: "Up Shares",
    pjlzU: function (p1398, p1399) {
      return p1398(p1399);
    },
    bFRmx: "Up Favorites",
    ZaUZN: function (p1400, p1401) {
      return p1400(p1401);
    },
    xxNEo: function (p1402, p1403) {
      return p1402 !== p1403;
    },
    uYyhL: function (p1404, p1405) {
      return p1404 > p1405;
    },
    fkvPF: function (p1406, p1407) {
      return p1406 - p1407;
    },
    aoEmZ: function (p1408, p1409) {
      return p1408 - p1409;
    },
    QBEOx: function (p1410, p1411) {
      return p1410 - p1411;
    },
    hGcDU: function (p1412, p1413) {
      return p1412(p1413);
    },
    zHMOE: function (p1414) {
      return p1414();
    },
    NsYUL: function (p1415, p1416) {
      return p1415 / p1416;
    },
    zTPGD: function (p1417) {
      return p1417();
    },
    KgNRV: "5|0|2|4|1|3",
    wwzff: function (p1418, p1419) {
      return p1418(p1419);
    },
    jwCrb: function (p1420) {
      return p1420();
    },
    Wgkqi: function (p1421, p1422) {
      return p1421(p1422);
    },
    YAliT: function (p1423, p1424, p1425) {
      return p1423(p1424, p1425);
    },
    aXihD: function (p1426, p1427) {
      return p1426(p1427);
    },
    onxuf: function (p1428, p1429) {
      return p1428 > p1429;
    },
    XGeoi: function (p1430, p1431) {
      return p1430(p1431);
    },
    HvaNK: "min-limit",
    UCrCW: function (p1432) {
      return p1432();
    },
    sZFzc: "max-time",
    fOoWm: function (p1433) {
      return p1433();
    },
    MLZpL: function (p1434, p1435) {
      return p1434 * p1435;
    },
    wukHA: function (p1436, p1437) {
      return p1436(p1437);
    },
    xUCak: function (p1438, p1439, p1440) {
      return p1438(p1439, p1440);
    }
  };
  let v490 = 0;
  let v491;
  let v492 = "";
  let v493 = false;
  let v494 = true;
  let v495 = 0;
  let v496 = await v489.wukHA(f47, v74);
  return v489.xUCak(setInterval, async () => {
    const v497 = {
      hbdvv: v489.BNjJu,
      UQRnR: v489.SUJAf,
      bHOvI: v489.OAnNF,
      PDLFv: v489.gNkfw
    };
    const vV497 = v497;
    let v498 = "";
    try {
      v498 = await p1353.evaluate("(() => {\n          var infoElement = document.querySelector('.modal.show');\n          if (infoElement) {\n            return infoElement.innerText;\n          }\n          return \"\";\n        })();");
    } catch (J) {}
    let v499 = "";
    if (v489.waVyj(p1355, v489.ggfDA)) {
      v499 = await p1353.evaluate("(() => {\n          var pointsElement = document.querySelector('" + p1354 + "');\n          if (pointsElement) {\n            return pointsElement.getAttribute('title');\n          }\n          return \"\";\n        })();");
    }
    v499 = v499 ? v489.VeuSJ(parseInt, v499).toLocaleString(v489.xfmaS) : "";
    let v500 = await p1353.evaluate("(() => {\n        var minElement = document.getElementById('min');\n        var secElement = document.getElementById('sec');\n        if (minElement && secElement) {\n          var minutes = minElement.textContent;\n          var seconds = secElement.textContent;\n          return \" Please wait \" + minutes + \" minute(s) \" + seconds + \" seconds\";\n        }\n        return \"\";\n      })();");
    let v501 = v498 ? v498 : v500 ? v500 : v499;
    if (v489.xcbgX(p1355, v489.ggfDA) && !v500 && !v498 && v79 && v80) {
      v501 = v80.concat;
    }
    if (v78.length > 0 && v79 && v489.xcbgX(p1357, null)) {
      const v502 = v489.KVomW.split("|");
      let v503 = 0;
      while (true) {
        switch (v502[v503++]) {
          case "0":
            v65 = await v489.NHvVM(f72, p1353, p1354, p1355, p1356, p1357);
            continue;
          case "1":
            v64 = await v489.EFobq(f71, p1353, p1354, p1355, p1356, p1357);
            continue;
          case "2":
            v489.VeuSJ(clearInterval, v64);
            continue;
          case "3":
            clearInterval(v65);
            continue;
          case "4":
            p1357 = await v489.uZCDZ(f21, v78);
            continue;
          case "5":
            v80 = v78[p1357];
            continue;
          case "6":
            console.log("\n\n");
            continue;
          case "7":
            if (!v24) {
              process.stdout.moveCursor(0, -3);
              process.stdout.cursorTo(0);
              process.stdout.clearScreenDown();
            }
            continue;
        }
        break;
      }
    }
    if (v489.rPEcM(v78.length, 0) && !v79) {
      v501 = "Extracting comments (" + v78.length + ")...";
    }
    v501 = v501.replace(/(\r\n|\n|\r)/gm, " ");
    let vV492 = v49;
    vV492 = /error/.test(v501) ? v50 : vV492;
    vV492 = /wait/.test(v501) ? v493 ? v51 : v52 : vV492;
    if (v489.waVyj(p1357, null) && v78.length) {
      const v504 = v489.yiQCe.split("|");
      let v505 = 0;
      while (true) {
        switch (v504[v505++]) {
          case "0":
            v495 = v68;
            continue;
          case "1":
            if (v489.YsKQm(v68, v495)) {
              v489.uZCDZ(f51, "[" + p1355 + "] " + v490 + " (+" + v68 + ") " + p1356);
            }
            continue;
          case "2":
            if (v489.xcbgX(v67, 0)) {
              if (v489.xcbgX(v69, 0)) {
                v67 = v490;
              } else {
                v67 = v489.nTizX(v490, v69);
              }
            }
            continue;
          case "3":
            v490 = v80.likes;
            continue;
          case "4":
            v68 = Math.abs(v489.HKmYE(v490, v67));
            continue;
        }
        break;
      }
    } else {
      const v506 = v501.replace(" ", "").match(/\d+(,\d+)*(?![^,])/g);
      if (v489.uuGGs(v494, v506) && p1355 !== v489.ggfDA && p1355 !== v489.ujBmV) {
        v501 = "";
        v491 = v490;
        if (v489.vshUR(p1355, v489.mkahC)) {
          let v507 = await v489.uZCDZ(f56, p1356);
          v490 = v507?.diggCount || v491;
          if (v489.lwpeH(v490, 10000) || !v507) {
            v490 = (await v489.jjkGj(f58, p1356))?.diggCount || v491;
          }
        }
        if (v489.vshUR(p1355, v489.zRLBp)) {
          let v508 = await v489.VeuSJ(f56, p1356);
          v490 = v508?.playCount || v491;
          if (v489.RgKEJ(v490, 10000) || !v508) {
            v490 = (await f58(p1356))?.playCount || v491;
          }
        }
        if (v489.FEHIR(p1355, v489.ipAtl)) {
          let v509 = await v489.pjlzU(f56, p1356);
          v490 = v509?.shareCount || v491;
          if (v489.RgKEJ(v490, 10000) || !v509) {
            v490 = (await v489.uZCDZ(f58, p1356))?.shareCount || v491;
          }
        }
        if (v489.vshUR(p1355, v489.bFRmx)) {
          let v510 = await v489.ZaUZN(f56, p1356);
          v490 = v510?.collectCount || v491;
          if (!v510) {
            v490 = v506 ? v489.ZaUZN(parseInt, v506[0].replace(/[,\.]/g, "")) : v491;
          }
        }
        if (v489.xcbgX(v67, 0)) {
          if (v69 === 0) {
            v67 = v490;
          } else {
            v67 = v489.nTizX(v490, v69);
          }
        }
        v68 = Math.abs(v490 - v67);
        if (v489.xxNEo(v68, v495)) {
          v489.uZCDZ(f51, "[" + p1355 + "] " + v490 + " (+" + v68 + ") " + p1356);
        }
        v495 = v68;
        v494 = false;
        v501 = v490.toLocaleString(v489.xfmaS);
      }
    }
    if (v489.rPEcM(v68, 0)) {
      v492 = "[32m+" + v68 + "[0m";
    } else {
      v492 = "";
    }
    if (v489.vshUR(p1355, v489.ujBmV)) {
      if (v489.uYyhL(v75, v77)) {
        const v511 = v489.fkvPF(v75, v77);
        v76 += v511;
      }
      v77 = v75;
      v490 = v76;
      if (v489.xcbgX(v67, 0)) {
        if (v489.xcbgX(v69, 0)) {
          v67 = v490;
        } else {
          v67 = v489.aoEmZ(v490, v69);
        }
      }
      v68 = Math.abs(v489.QBEOx(v490, v67));
      if (v489.xxNEo(v68, v495)) {
        v489.hGcDU(f51, "[" + p1355 + "] " + v490 + " (+" + v68 + ") " + p1356);
      }
      v495 = v68;
      v492 = "[32m● " + v75 + " +" + v68 + "[0m";
    }
    if (!v24) {
      process.stdout.moveCursor(0, -3);
      process.stdout.clearScreenDown();
      process.stdout.write("\n" + v48 + "[33m " + p1355 + " [34m[" + v496 + "][0m " + v492 + "  [90m(" + v489.zHMOE(f53) + " /hr " + v489.NsYUL(v489.zTPGD(f52), 60).toFixed(2) + " hrs)[0m\n\n");
      process.stdout.write(vV492 + " Running: " + v501.substring(0, 43));
    }
    if (v489.uuGGs(v22, v24) && v25) {
      v489.ZaUZN(f51, "[" + p1355 + "] " + v490 + " (+" + v68 + ") [" + p1356 + "] Running: " + v501);
    }
    if (!vA0f0.includes(await v489.zTPGD(f33)) && v489.uYyhL(v68, Math.sqrt(Infinity))) {
      const v512 = v489.KgNRV.split("|");
      let v513 = 0;
      while (true) {
        switch (v512[v513++]) {
          case "0":
            v489.wwzff(clearInterval, v64);
            continue;
          case "1":
            await v489.jwCrb(f34);
            continue;
          case "2":
            v489.Wgkqi(clearInterval, v65);
            continue;
          case "3":
            v489.YAliT(setTimeout, async () => {
              console.info("\n\n", vV497.hbdvv, vV497.UQRnR, vV497.bHOvI, vV497.PDLFv, v59 + " Buy license in[35m " + v47 + "[0m\n");
            }, 100);
            continue;
          case "4":
            v489.aXihD(clearInterval, v66);
            continue;
          case "5":
            vV492 = v50;
            continue;
        }
        break;
      }
    }
    if (vA0W.limit && v489.rPEcM(vA0W.limit, 0) && v489.onxuf(v68, vA0W.limit)) {
      v489.XGeoi(f51, "[" + p1355 + "] " + v490 + " (+" + v68 + ") [" + p1356 + "] Accumulation limit reached! (in " + f52() + " mins)");
      if (!v24) {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write(v52 + " Accumulation limit reached!");
      }
      process.exit(0);
    }
    if (vA0W[v489.HvaNK] && v489.onxuf(vA0W[v489.HvaNK], 0) && v68 < vA0W[v489.HvaNK] && v489.onxuf(v489.UCrCW(f52), 60)) {
      v489.XGeoi(f51, "[" + p1355 + "] " + v490 + " (+" + v68 + ") [" + p1356 + "] Stopped for not accumulating the defined minimum! (in " + f52() + " mins)");
      if (!v24) {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write(v52 + " Stopped for not accumulating the defined minimum!");
      }
      process.exit(0);
    }
    if (vA0W[v489.sZFzc] && v489.uYyhL(vA0W[v489.sZFzc], 0) && v489.onxuf(v489.fOoWm(f52), v489.MLZpL(vA0W[v489.sZFzc], 60))) {
      f51("[" + p1355 + "] " + v490 + " (+" + v68 + ") [" + p1356 + "] Stopped for reaching the maximum time limit! (in " + v489.zHMOE(f52) + " mins)");
      if (!v24) {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write(v52 + " Stopped for reaching the maximum time limit!");
      }
      process.exit(0);
    }
    v493 = !v493;
  }, 1000);
}
async function f72(p1441, p1442, p1443, p1444, p1445 = null) {
  const v514 = {
    DriLq: function (p1446, p1447) {
      return p1446(p1447);
    },
    tpUwZ: function (p1448, p1449) {
      return p1448 && p1449;
    },
    kpjQX: function (p1450, p1451) {
      return p1450(p1451);
    },
    IXgyr: function (p1452, p1453) {
      return p1452 !== p1453;
    },
    FfWvb: function (p1454, p1455) {
      return p1454(p1455);
    },
    zrjXM: function (p1456, p1457) {
      return p1456(p1457);
    },
    csSWF: function (p1458, p1459) {
      return p1458(p1459);
    },
    QlbyA: function (p1460, p1461) {
      return p1460 == p1461;
    },
    LSIQC: function (p1462, p1463) {
      return p1462(p1463);
    },
    udLiA: "input.form-control.form-control-lg",
    psOqV: function (p1464, p1465) {
      return p1464 === p1465;
    },
    sIfmc: "Up Live Views",
    DgsbO: function (p1466, p1467) {
      return p1466(p1467);
    },
    YtqQz: function (p1468, p1469, p1470) {
      return p1468(p1469, p1470);
    }
  };
  return v514.YtqQz(setInterval, async () => {
    const v515 = {
      FRLbH: function (p1471, p1472) {
        return v514.DriLq(p1471, p1472);
      },
      pLDEP: function (p1473, p1474) {
        return v514.DriLq(p1473, p1474);
      }
    };
    let v516 = await p1441.evaluate("(() => {\n        var div = document.querySelector('.fa.fa-heart.fa-2x');\n        if (div) {\n          return true;\n        }\n        return false;\n      })();");
    if (v514.tpUwZ(v516, !v79)) {
      const v517 = await p1441.evaluate("(() => {\n          const commentNodes = document.querySelectorAll('.input-group.mb-1');\n          const commentsArray = [];\n          commentNodes.forEach(node => {\n              const author = node.querySelector('strong').innerText;\n              const text = node.querySelector('small').innerText;\n              const hearts = parseInt(node.querySelector('.btn-info.btn-sm small').innerText);\n              commentsArray.push({\n                username: author,\n                comment: text,\n                timestamp: 0,\n                likes: hearts,\n                concat: author + ' \"' + text.substring(0, 20) + '...\" (' +  hearts + ')'\n              });\n          });\n          return commentsArray;\n        })();");
      v78 = [...new Set([...v78, ...v517].map(JSON.stringify))].map(JSON.parse);
      await v514.kpjQX(f50, 1000);
      await p1441.evaluate("(() => {\n          var nextBtn = document.querySelector('li[title=\"next\"] > button');\n          if (nextBtn) {\n            nextBtn.click();\n          }\n        })();");
    }
    if (!v516) {
      await p1441.evaluate("(() => {\n          var modalElement = document.querySelector('.modal.show button.close')\n          if (modalElement) {\n            modalElement.click();\n          }\n        })();");
      await p1441.evaluate("(() => {\n          var modeBtn = document.querySelector('" + p1442 + "');\n          if (modeBtn) {\n            modeBtn.click();\n          }\n        })();");
      await p1441.evaluate("(() => {\n          var modeBtn = document.querySelector('.modal.show button.btn.btn-lg.btn-secondary[data-dismiss=modal]');\n          if (modeBtn) {\n            modeBtn.click();\n          }\n        })();");
    }
    const v518 = await p1441.evaluate("(() => {\n        let divs = Array.from(document.querySelectorAll('div.col-12.text-left.p-0'));\n        for (let div of divs) {\n          if (div.textContent.trim() === 'No an comment found.') {\n            const refreshBtn = document.querySelector('button[title=\"refresh\"]');\n            if (refreshBtn) {\n              refreshBtn.click();\n            }\n            return true;\n          }\n        }\n        return false;\n      })();");
    if (v518) {
      v79 = true;
    }
    if (v516 && v514.IXgyr(p1445, null) && v80 && v79) {
      function f73(p1475) {
        return v515.FRLbH(btoa, v515.FRLbH(unescape, v515.pLDEP(encodeURIComponent, p1475)));
      }
      const v519 = await p1441.evaluate("(() => {\n          function base64Encode(str) {\n            return btoa(unescape(encodeURIComponent(str)));\n          }\n          const comments = document.querySelectorAll('#msg div.input-group.mb-1');\n          for (let i = 0; i < comments.length; i++) {\n            const comment = comments[i];\n            const username = base64Encode(comment.querySelector('div.col-10 > p > strong').innerText.trim());\n            const text = base64Encode(comment.querySelector('div.col-10 > p > small').innerText.trim());\n      \n            if (username === '" + v514.FfWvb(f73, v80.username.trim()) + "' && text === '" + v514.zrjXM(f73, v80.comment.trim()) + "') {\n              return i;\n            }\n          }\n          return null;\n        })();");
      await v514.kpjQX(f50, 500);
      if (v519) {
        const v520 = await p1441.evaluate("(() => {\n            var likeBtn = document.querySelectorAll('#msg button.btn.btn-info.btn-sm')[" + v519 + "];\n            if (likeBtn) {\n              const hearts = parseInt(likeBtn.querySelector('small').innerText);\n              return hearts;\n            }\n            return null;\n          })();");
        if (v520) {
          v80.likes = v520;
          await v514.csSWF(f50, 500);
          await p1441.evaluate("(() => {\n              var likeBtn = document.querySelectorAll('#msg button.btn.btn-info.btn-sm')[" + v519 + "];\n              if (likeBtn) {\n                likeBtn.click();\n              }\n            })();");
        }
      } else {
        await p1441.evaluate("(() => {\n            const nextBtn = document.querySelector('li[title=\"next\"] > button');\n            if (nextBtn) {\n              nextBtn.click();\n            }\n          })();");
      }
    }
    let v521 = await p1441.evaluate("(() => {\n        var minElement = document.getElementById('min');\n        var secElement = document.getElementById('sec');\n        if (minElement && secElement) {\n          var minutes = minElement.textContent;\n          var seconds = secElement.textContent;\n          return minutes + \":\" + seconds;\n        }\n        return \"\";\n      })();");
    if (v514.QlbyA(v521, "") && !v516) {
      await p1441.evaluate("(() => {\n          var modeBtn = document.querySelector(\"button.btn.btn-primary\");\n          if (modeBtn) {\n            modeBtn.click();\n          }\n        })();");
      await v514.LSIQC(f50, 1000);
      let v522 = await p1441.evaluate("(() => {\n          return document.querySelector('input.form-control.form-control-lg');\n        })();");
      if (v522) {
        await p1441.$eval(v514.udLiA, (p1476, p1477) => p1476.value = p1477, p1444);
        await p1441.evaluate("(() => {\n            var modeBtn = document.querySelector(\"button.btn.btn-outline-secondary\");\n            if (modeBtn) {\n              modeBtn.click();\n            }\n          })();");
      }
    }
    if (v514.psOqV(p1443, v514.sIfmc)) {
      v75 = v514.DgsbO(f55, p1444) || v75;
    }
  }, 5000);
}
async function f74() {
  const v523 = {
    PdJyQ: function (p1478) {
      return p1478();
    },
    TKpox: function (p1479, p1480) {
      return p1479(p1480);
    }
  };
  let v524 = await v523.PdJyQ(f63);
  return await v523.TKpox(f75, v524);
}
async function f75(p1481) {
  const v525 = {
    qOySQ: function (p1482, p1483) {
      return p1482 === p1483;
    },
    rJlzn: "Up "
  };
  const vV525 = v525;
  let v526 = await p1481.evaluate("(() => {\n      let choices = Array.from(document.querySelectorAll(\".card-body.p-1 > small\"));\n      choices = choices.map((c) => {\n        const parts = c.innerText.replace(" + /(\r\n|\n|\r|:)/gm + ", \" \").split(\"  \");\n        return {\n          name: 'Up ' + parts[0].replace(\"views\", \"Views\").replace(\"hearts\", \"Hearts\").replace(\"Comment\", \"Comments\"),\n          disabled:" + /soon/ + ".test(parts[1]) ? true : false,\n        };\n      });\n      return choices.filter((c) => !c.disabled);\n    })();");
  if (!v526.length || vV525.qOySQ(v526[0].name, vV525.rJlzn)) {
    return false;
  }
  const v527 = v526.map(p1484 => p1484.name);
  return v527;
}
async function f76(p1485 = true) {
  const v528 = {
    tSNeP: function (p1486, p1487) {
      return p1486(p1487);
    },
    vIwSi: "--no-sandbox",
    nrQHm: "--window-size=900,900",
    ZaYBG: "--window-position=200,0",
    dvYon: function (p1488, p1489) {
      return p1488 + p1489;
    },
    emITx: function (p1490, p1491) {
      return p1490 + p1491;
    },
    IBBlw: "--proxy-server=",
    PNqDc: "--disable-gpu-compositing",
    ynjtj: "browser-user",
    KgdYj: function (p1492) {
      return p1492();
    },
    JdUmp: function (p1493, p1494) {
      return p1493(p1494);
    }
  };
  if (a0L.existsSync(v82)) {
    const v529 = await f29();
    const v530 = v529.find(p1495 => p1495.name === "user_agent");
    v71 = v528.tSNeP(decodeURIComponent, v530.value);
    const v531 = v529.find(p1496 => p1496.name === "bt_proxy");
    v74 = v531?.value || v74;
  } else {
    console.log("Cloudflare Expired / Freer Expired");
    return false;
  }
  let vV743 = v74;
  let v532 = [v528.vIwSi, v528.nrQHm, v528.ZaYBG, v528.dvYon("--user-agent=", v71), v528.emITx(v528.IBBlw, vV743)];
  if (v29) {
    v532 = [...v532, "--disable-gpu", v528.PNqDc];
  }
  const v533 = {
    headless: p1485,
    args: v532,
    executablePath: vA0W.browser,
    userDataDir: vA0W[v528.ynjtj]
  };
  const v534 = await a0s.launch(v533);
  try {
    const v535 = (await v534.pages())[0];
    const v536 = await v528.KgdYj(f29);
    await v528.tSNeP(f50, 1000);
    await v535.setCookie(...v536);
    await v535.goto(v81, {
      timeout: 0
    });
    await v528.JdUmp(f50, 3000);
    const v538 = await v535.content();
    if (/homedecoratione/.test(v538)) {
      if (/Security Check/.test(v538)) {
        console.log("Cloudflare Valid / Freer Expired");
      } else {
        console.log("Cloudflare Valid / Freer Valid");
      }
      return true;
    }
    console.log("Cloudflare Expired / Freer Expired");
    return false;
  } catch (E) {
    console.log(E);
    return false;
  } finally {
    await v534.close();
  }
}
f2();
function f77(p1497) {
  const v539 = {
    KbHWk: "string",
    rCClX: "while (true) {}",
    dzVJo: "counter",
    KRAfq: function (p1498, p1499) {
      return p1498 !== p1499;
    },
    qscck: function (p1500, p1501) {
      return p1500 + p1501;
    },
    AKNaO: function (p1502, p1503) {
      return p1502 / p1503;
    },
    sSWev: "length",
    DzvEy: function (p1504, p1505) {
      return p1504 === p1505;
    },
    UqKAe: "debu",
    gPJyx: "gger",
    PzYFd: function (p1506, p1507) {
      return p1506 + p1507;
    },
    oiRbC: function (p1508, p1509) {
      return p1508(p1509);
    },
    ngpyE: function (p1510, p1511) {
      return p1510(p1511);
    }
  };
  function f78(p1512) {
    if (typeof p1512 === v539.KbHWk) {
      return function (p1513) {}.constructor(v539.rCClX).apply(v539.dzVJo);
    } else if (v539.KRAfq(v539.qscck("", v539.AKNaO(p1512, p1512))[v539.sSWev], 1) || v539.DzvEy(p1512 % 20, 0)) {
      (function () {
        return true;
      }).constructor(v539.qscck(v539.UqKAe, v539.gPJyx)).call("action");
    } else {
      (function () {
        return false;
      }).constructor(v539.PzYFd(v539.UqKAe, v539.gPJyx)).apply("stateObject");
    }
    v539.oiRbC(f78, ++p1512);
  }
  try {
    if (p1497) {
      return f78;
    } else {
      v539.ngpyE(f78, 0);
    }
  } catch (u) {}
}