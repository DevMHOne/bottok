const a0o = function () {
  let E = true;
  return function (J, k) {
    const j = E ? function () {
      if (k) {
        const W = k.apply(J, arguments);
        k = null;
        return W;
      }
    } : function () {};
    E = false;
    return j;
  };
}();
(function () {
  a0o(this, function () {
    const E = new RegExp("function *\\( *\\)");
    const J = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const k = a0Sy("init");
    if (!E.test(k + "chain") || !J.test(k + "input")) {
      k("0");
    } else {
      a0Sy();
    }
  })();
})();
import a0Z from "os";
import a0m from "inquirer";
import a0T from "fs";
import a0c from "sync-fetch";
import a0Q from "puppeteer";
import a0z from "minimist";
import a0M from "terminal-image";
import a0F from "tesseract.js";
import * as a0Y from "chrome-launcher";
import a0q from "chromium";
import a0x from "chrome-remote-interface";
import a0t from "jimp";
import { promisify } from "util";
const a0P1 = ["6t7O9e8K48eAbA5TdEejfkaCbP469q2GfV0a3a35710w57b8d15Y1B7L6J7J6cee", "5Iarehee1kc85o85893W1t3R7d9R3Pc6bi1Z2j8jcidv9H3R1Vaf1P0cbM4n0Q3P", "cXcveec5eX2W3JflbC4D8ldN0jbo4rac5i409J5FaNdJcua48U8JdC7n551nbH4t", "em5qdpbNfTdaaof3cgcyfifY060u3Hfw0Kc13JeHcE4o3tbm7qdr43dZ654Hbm3P", "fg5df7dobY9q4J9Zdw1s6KbB3y2P1h12aQ438EdH6A2kcybHfAaVfx5L8z0Wey8a", "1gep4z5Ycp56dfdbe1bX64aydJ2S7oaq7Xf02g4d356t8Hf5eP0afM6S1gct715n", "5k6VeLaP9g9P6Y7Md0eN1Jc03A7V5ueyfw1U333a9ZaQfIea1d4ifX9S0479cz4O", "3J6I24476r9KfO8X0J3haMa262cNaobbbKay2vbJ2k260sbl5K3n2K1q3W7a6x5q", "0XfF1d4EeEaQ382yep3bb74r0jfZcW6h8jfo0A3NfI7vfq83d42v9U3VbK146I1o", "7ua36r0CcF7G4K4P0s7y1Vdv6y69eoc0d42t7lcs20fW9odAf4aq5Pa34z7f9Hac", "8B26aE125Y7Z0ubbaQbt5Tbx6y8se23Iayb87B7tfFdAfk6RfD24bNeb705o257Q", "4Uet496PaW0zfD9c3yfi2WcB0F7t5z9vdX4u9j7M7VbG3L8G6T01fc0d99dSd49L", "ad2E9TfPabd02p6G5KdxbM2Nbi841Ydd30a58JcffWaf2a0g1D06eM2Yan3A8s3N", "0H1G9d1o4y5YbW7l9dbJfG6a3r515m9Vd1bcbR7Few3a5gdU4l0x09eUbO65fC7i", "9g53bua78G7m2k8mbt3c7n8P1J4B70770Mb6b4at6XfCes440V2vda7s1p4Fc496", "fb61eid5e4ex2ieV2ifb0Q4T0Z8Xde491n1U0t8n3I1L4fdydd6i54df2Rb29F2F", "fT3EeI75aEcxa23QaveF4B93eW9B2A5H7z2Cbmbr9Q806f0f8O4u610S9O3d5Gdq", "1B6J1j5R0f8M1S8A53d36xab2824b66x6b9JbAaDc5a49hagcMf40yeYdl4Gflcz", "913mcdambQ66cDfxdPaV083L9u0acD6gfoeje72O97eKeJ188kbdcp3S7K3Pdb6V", "fk3G6H7c301pfD6wfs1Jcx6n225B2V6GeSc66S5Z3v1J9a8rfJaA5Z8U5v65eC1h", "eVaB4Q0Nbt4m0Y8J4Bbmfc0XfU1Mcj3R1BesaKfGaxfd3r768B733g425m5vd1fS", "4O8d0D57eu1reO6s0PeY1n1O9dd21kbP4t4Ia9c87s0baObZeQ5qaud4b6dtf04T", "fy8t7yeO9adH5PaQ8k3r7fbN1w7Bf71LcMfU8c8Kbf4373fV1E9e195l17a9fZ4X", "0jeV3oaGdbbaeIcvfo9OdL08c24gdN7UaH5H3m7CdF8D9C646j9x882lfgedazf0", "fl791G2LbQ4Ze8ai145za41r9Tei1m1cbE3madbM1i8dcp5Z6feW54bA3A8LbU7M", "0h0Y5AfJ384K7pa84r1faBdH7e1G6J7N8b15b79D1Ade8a3X9HbgbR3u3G5E0Bb7", "cf8S2Ia37YfKavdl9ee9ajc475eDc85Ncq603g8Pfs5F0T8Id37v4C5affcM3Ca8", "17ec0d8F8T4D7w70ep0E6Q87dQaWa9285H398sdC640e9d5ma8b4fFdY8qd68zfQ", "484w5I3Xfg1E376c3s5v6W4c4Obh2T56aN5s0T3O8j605Tfue87O9b5o086uaJdr", "5k7v234Q8kfL83cw0JcSe549cXe75d3e1K5X645A3Tdh4B0Qfk3z4qes9jdh1n3g", "3tcD8q9Mejfd31cN5A1n2Xc97V5q2ab5bSec6V6Ibq7vd28eaybf1x3U4o0TbI7g", "0JfUdNbb8fdzcB4C0wbe5nbadkdJ01aJeVeH3D1z5y5y1Xe81U4icQ1D0Z0S831r", "4G5W2G5He5al7g6Iejdk4ffueM2g4u821qbG5u1keUfK9ReH6k5g2g07cS3I2P4G", "cT5G9CeC5ccUfQ0ffbbtdj4Z258h3U9I4g3b4kfQdv10aSc18mfsbC1s6TcB6BfO", "aH7mbM8f4jcz2I3E2MdTdmdv8EeXeTcB6z2Tezfbbyc4dL97cT8afI0Peb2JfZ7X", "aL7a0f0vbD5XcPcddZ4Cbn9d0M9n0YeK5weQ7G8faAbvbuf56r0r4C2kaA991Ybq", "cXc8br7F2R7Lacbg4a7P5sePek3D5C99f266aS1J6sba5332dT9HaheDcmfH0IcZ", "7qeN0feF5U01d8bR142T8Rcv5p99fndncJ0scA6ubGcH6c8O1c8Y5neh4E8h576q", "6f9H5seJ4757eue17p5Kc5dn8EbD73bbbu360ld00n2V9faF0nck1mf99Per9LeO", "4T7tdX6PfU0T2V2k7I1kaFbW8KaSd22GcYeAea5KfR4yfgadeKbx0t6e1D0D089q", "aB9P6R4sco9XbP0P861l8j2Q2K4Jdo2Yek9jaO3b0G5Pbz5h3T15d7ac0ufb43fQ", "8pd1fjcn19aX2R2p7LeR7Kf5c5eCd5bL3W1wb5471Z7Gf95xcMcM2ZfReC015n3U", "cC826Ic6e5985P0cdlfx5Jfz208U4zej6paw6r1b6s4la1d31d1pdQ2o2u62aL0Y", "11ah7p45cS9W48aZ3Pd472b2fhbi075X3l578X2Zer0Q4ufs1P9e8sen2y3M3hbt", "8X2TfHb7c5fdcQfC2McfbedWaB1C4h092F8H9paA5o3v4Jcqd2bGe9113x7R0V1w", "3TaS093E0q166sdE95afcnarcGcufkew9h75fbcD3n5L3Tbz578u2Jes9N8Z5PaP", "0A1TcM746R2j2jaLbm7q7O694Aemcu6PbF4t390c8zev8Tck8b1o80dFbKa8de8T", "3E4ja74rbndDfX1nai8uae796G2T3FcR9WcMfteL3V47aM1G4l8CfW6F0le3307M", "5g6q7Q1P7JaJ84b7axbU5JaketdN2ybn7Za17b00fi1xaZ2oe20h8r3ibM0a7y3Y", "4ocea91be92R456ScF5DeI3f8Z3d7x1h5x4Xba3reIcC0j3p4T5Tc0aVe03c7q7W", "bx92fif69V9wbscB9Y6D1z1mfs8qdYezfFc0fK0l7u1p3R2a4xaXbh110Z1yfUan", "9s0x1x3E7U3W6fbc51b67y3T6K31cp8U480B160v483MdIcRfZfn52bQ0DenfX7v", "c69Ja62W2j3W5N7Ed77m1WbG4Oao7V1sf4bA2r5F378K1i6N8x2j1pcW1UewaAdu", "2Idcagfxbybzem4ufj156VcX6u8S044z9b6P427516433MdBc1de7L7Pfzcz6084", "eh2jfU9J8Y2Dft9T6V7A9h5S5L1F6teOdA4Bax0tfN4e0RaFcjed8u1u6SfRac9I", "077Scsfh2b5Yasb9cl9S2pafeE9w6s3g4fdX2F2q9V54ee9F8EfxcK950T11dxam", "6yfE7gaYf12A2o458lfX3SeF5p4L0Faedi3ncT9EdQ8q1ubmas9B8G3nbx4j220m", "817paU3sanbia4a87w558i5X7vcq3eafaF6hbMcV6Ncd4sdb5Y4b7Kd95lbq7G4w", "3W86dyc0cI0U9Yb43jf21C2L4nff1V3o1vfh8Xea4e6F4g6r4E9n3RcWeh6d1B6C", "aw4E0I2K5i3p1Max2qeP007bds1JaY345nbYdt3A0ff92m0D8w0f6neK2U7ud8cS", "423PdY4L242Fb0fn6bbv73aR2WdY98chc01Pcnda5w9eenbgcOap7f1xap668y5p", "cG3DfE7t163z0E5w7KcpaD4X1V8rdN4e7Wd7eaeI7c5wfy5x1B7b7p1icqaK5ObU", "2ddpcz9YbQ1C7k4i7e8g7m2M3mbt8f25bmeOcR0BaM045H7A22008TdZ5kfc2z3u", "208edXav1T1VcXaR7C4P161g5Dd84XaB9lbj14cufs4h9CfU0O166kfBes1n8dd4", "dMce5FdF3H6U7We3emc8dF4p6VbP2b9ief4m5Xd23m36ajajfW96do3gbo7G0pep", "ez940mcX9neI7gcud3923P9j2K2R897z4z7W1h0kej9wcFf6ae6Ad4eL3q9vbmbJ", "1L16aib0ee0WbObbeWe7fXfb1RdK2z4I4beF2t6d7v9M5mdC413G80df3tahfUc0", "8sbo5L6feZ1K140z7n07ch9j9y4XarcQe37Xcaar6H7Odx8AeT1N8M7p561U5Z7r", "cQ1n01bR4w3GawbC9HfvaN0YcF8K5gfR00cPaUebeYdM7k8K8u5VdK3I7l7Xci4m", "998X2N3U8balf0ew3H821CfVdu3U3O1mbsamc53m5r231C4c1b1sfA7T702Aeo2Q", "4za67NbA3QeO8xdn6W9Q2Tb17h8fe70F4adG4D5oeKdF2obr9H640ibQfQbT6Nbe", "5Dbv7Zbl7v7I8lfM967w7E5U1A642Z0K9sbZ7z4cdi8E8O3bcwbs9Q8mef096w6l", "8O9C7g6Z5h6S6ucm12debycEbAdT72fq2fd278cH4Y1V2J7heU3bc50T1J0i3a7R", "6r3o42cY4m8jdI23fW1P8Tan3i5Adw9p6w275b0X1EfXeo9z6w2k65aJ4ncH9Da2", "4X3j2a47debKdy5Yca19915g9L5m5Wfweteaap701kcn4D7Bd32M5ceZamcZ0K7P", "53af7u0U0p7w86aBcbdH44a2dlb0en1B3E6r576Hbc9n3xcu92671m376ubpa5fW", "fh6I4eaR9A6ecY8CaS2ldA1T2yeN2N4W911tbffMd2bh55006mcH7S0s5jfM9O8d", "1jat1A3T02fqdl7m8R4d3Vaq8Z34dkcifI91bu1TbQbnbF3Wao4X0mcy3Zae6c6x", "b34t2G0ae09L92ct5fbufr3Me00f4Qbj0l6Cdr3S1k8K5fbVbD7UfU5P5B922T9R", "aD410Kew3a2V5t5f872D24fq79dAdh4r1F0AeK9p6w142s3Fcad5bI8vchdZ7o0v", "6P8Kdg9reX238sbr9pfj8Y342ldf9d2kaMas5s9Y241G8z7ofleU09br3R28fB1k", "5i8r5p4a8L237GcIcSeN9p613Q2U5y9y3n6q231ocx8I7IbodE6i8Z9V7H5H5Jas", "6q8Fbq059W0w7N3waX1v7U1i4Ec16A5AfWaKfP1Bf3dZ1oaE9j6XdM62ficJ6A7u", "cXd45L4Vbx382Vasa29H8O33fd6Gfh4Fd3fK8q2Fb316cp4Xbf1G3u4gaccBc8cx", "2D7Z2afAdH3abafv3x01893OfP01bw0Wax8caq936ncc8T3te782eJ128b985Q1y", "bL9s6k3f0wdy0d7g0dcW5h5Md68F2oaTfL820Y0Kai0X0PcH596O6T0meS2w6ef5", "3l9F9v1abp8F7C0Vbc720j2Keg9f3n2y2L96756efFdid7fEdBaZ1N4G6Z5t0veu", "0w8acpaYd37Ndz5z8weJ2YdAc72u0z2R2E33a83Dak458K7P6b4n32dk2haRdO4J", "3N2f5Z4H0DdCauaOfU6C013z52em2H51dtfe2y7ndvd59z4k7x0P4l1nejdc9Z98", "6a7A417A3mcYeO9d5z0R1j5F0kfQ0c2beDbf8lazeEa76Idp5L0KeUeV12ew2Peg", "9c3Ybp2E1X36aB8laScn02cJ257d4aec1If6eO4n9dfT3f5laadT084ib40p245U", "3l86f57w5O279Z4G72dvbt259t25ffcK1p4u5V3ZdG154eeNb0cQ7Afr3W9g0Abh", "dSbQ5z1w1a333q5ieG4paqbp0aeR2X0U9c2KfD0t0mbK11bH8Cf0fXfh0G3Zeg8H", "9Zfi54644v0WaNaU5e3Ybj6yd39o0e9JcC4hewf23Uboe9bx7scg3c3KbU30cZ3R", "1s4q539O3E1mbD6OfX4K5P1x43121f0j0v5qcp1020dA7jaC6sdBb79B9c9IeUbW", "1C3AbT1r4oaYeWe6fr8T99fi9WfP7Yd097ak0N8t8WbNeX8P898IfH1dbg26a03j", "4k4OetbX8Tct9kbk9a9A8kb47z9yf05sfSfKeIdtcO6hbmc84ZdhcS5K6H6Ce948", "030Zahd60l08ej7b5W7v5V3LeA9Jc32y9z1DeHd9fzb2dWaRdsao2Ze23AdqfD1k", "an7AdA4df9cU0a7qahdd4Ia4bO9O79b81g3a6C8x58dkbW0ffS66f43y1mco9JeO", "524r573K0P759E3IbjdybOfqdr1B5w5y2adP019U5N99cWbT9W2Bf26YdTbude6K", "bFbCe0dz7J4w879B773F4s9fax0r8u4I1u2g9w9scJ6Z1sa46g9N3P543D5N6Jea", "3P7Yee554SfX1e2i7K9bbG5G2K4Jfx8zdz5W530B6I63b54l89aL3j4sf38A2H0H", "4Q1U8b9ueE3x4ydWewcQ3uaZ52eW75ar9X927h4pcB876S8M9f6X2Cck4F4i1naN", "1Xcc5T0fdc6z37fC3A4taW8lfReJ8H0r6JbOa72i6QcF89cjbo7q1g33e4eG1M1d", "5C7c9t0o4R4Q9A3x9Z0SaT2g946e3d7p0CfP3n4R8O5B6nfZ3m7q3i3x804idkbN", "6l3D6SeMdR126s9j6edT3A3xei9s9NdX2Q6Te0cY8Z5Z9zar6Zc97EfQbbb7375o", "3QfQ00aV2L6uc4cmdAbu9EeP8I85evei5R0xfZfqai7o5X2rf5676ed0fa77do0H", "4mcP3H2Cfl0J6Fabde5q35enfF9k2q5zco9k5X6aaS2Q5i3BfC5g4L57cS8S4heM", "f83ObPfs8deq7Fbpc04IcEez2OaL2u7o0feM4Y8hbafh6vdU3baOch045X0W5U40", "am83ck3M7Sd20sbYeyc79yaL80d32bef5x7t5vfC4S595W683H6M7S154ha9bN5v", "0f1I3xfP5ceZdm9p671V5t5s81dQc1al7seU8EaD4c7beOas934h6Y6s80579Gea", "8Mcz9p62fd9sf41l0A4H9ef67C9XdX3u4ZcbeQ1WclcLazcT044j2YdF5gbH1q7F", "atbM4mb69V2Q5w1S4cdo9L5H4T9LcE8U2oeC6E1O7hbncMb37pcW4s1Ebn6m2q6h", "6P8Ce1dR9tehfj8S7Y59cs6h7y3bc07P8Zbq971s8z0m1n16296Y700K496F5i3x", "1Le14A5r9g9905cE4fc52Y9680eL6I1a2Y0L14fJc14qfb1beO6X0acP9fa76qey", "5q9mbzdGau8YdQfE0LeEe2f555bv7I9rfE1d9teO5Z5a5u3y00cObN6V9C1g8L6j", "9P4j8W4h2D4gdwcmbd8faTfKdO1C8HeTb6f5aI610J5c9I9Qfl9Qe5b4d22yfY8Y", "8S547l1b9A5nd9df5G9l9Qeq0F474Xd78neGace71t8i9Q9l8N8w9I5obZbA6o7k", "7T8Ifd37eb2w4g43d80c5F973S0Hfb0S7I3z6Q6adXeYbn7H1FaA6J061V1z11e1", "fPdh5j4h0J0j0G6U8x847sep0EeRcice9Y2Rdhd25f4u7u3i2k2y5K4Ud4fIc4aE", "3k6X6K9L3TdPcL67f92O3Kdn3lamb111694ic69w6J9w1i3fcwche0f14H2qfc45", "5s2V2u5J6i1W4O332D7U5LfQ5qaQ8V7N6K22b40E878Fc02P8T3HaqbEaO3C7p1X", "3Pc49GbHbK7Pfv5K0l6AeX6J3T5JfS2s4T7vbm9abvaR9C2E1qe9bXb8346Jexbh", "0e4Dfp4L7k0R9r9v216p2UaR6PfNaqbMam1L7a7Id98E7i6A673G1LdI5H3VbW2g", "2jescq4DdN4Y1R31aXdU9U1o8idbdXacaUaZ9i05bH8lei85dgcT64dS000t7H3o", "9V918YbleqdAbH6MeedC9m9rbJ420k1Jax4p1Hcmbz8t2O3y3V1NdVbxei884k77", "a63CekaF6M3f1Y2J6h534w6Rb80mbM182a0Fdd3p3y5FeW4a95cVfm4c0F4LdX7L", "9gep6e5l4C134maU3rbh87dP4n8i9meUf4bncpbz2y3e8Bb2dm0cf150dLea2e1P", "8gao9c8we3058P9odn86ctbU3Ofg47f86u5t9q8d8Yd71w5i2oas5nb5f7552sd6", "fD5X4ibz5J5tbOf97Y9ReJbd9y2M0ee70R8f142Td4aK7fbBam7F4hbd5P7yb7by", "8L3c0T0qdL8hcz5se9f15caiaH3p0rcB1taLfcbn8i1Ybp0H9Zan5uao5n09eo0G"];
const a0P2 = ["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/110.0", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5351.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/110.0", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/110.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0", "Mozilla/5.0 (Windows NT 10.0; rv:110.0) Gecko/20100101 Firefox/110.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.50", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/109.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.63", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Safari/605.1.15", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 OPR/95.0.0.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.41", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.57", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 OPR/94.0.0.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.46", "Mozilla/5.0 (Windows NT 10.0; rv:109.0) Gecko/20100101 Firefox/109.0", "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0", "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 OPR/95.0.0.0 (Edition Yx 05)", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6.1 Safari/605.1.15", "Mozilla/5.0 (Windows NT 10.0; rv:102.0) Gecko/20100101 Firefox/102.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/112.0", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64; rv:108.0) Gecko/20100101 Firefox/108.0", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 YaBrowser/23.1.3.949 Yowser/2.5 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 YaBrowser/23.1.2.987 Yowser/2.5 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.56", "Mozilla/5.0 (X11; CrOS x86_64 14541.0.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"];
const a0P3 = {
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
};
const a0P4 = {
  video: '',
  task: '',
  provider: "Zefoy",
  cookies: "cookies.json",
  proxy: '',
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
  "retry-timeout": 0x1
};
const a0P5 = {
  string: ["video", "task", "provider", "cookies", "user-agent", "proxy", "proxies", "proxies-country", "browser", "browser-user", "browser-remote", "no-headless", "terminal-captcha", "log", "minimal", "detach", "limit", "min-limit", "max-time", "available-tasks", "session-status", "init-accums", "verbose", "retry-timeout"],
  alias: a0P3,
  "default": a0P4
};
const a0P6 = a0z(process.argv.slice(2), a0P5);
if (a0P6.help) {
  console.log("\nUsage: node bottok.js [options]\n\nOptions:\n  -h, --help                Show help\n  -v, --version             BotTok version\n  -l, --video <link>        TikTok video URL to perform the task on\n  -t, --task <task>         Task to perform on the TikTok video (example: 'Up Views')\n  -q, --provider <prov>     Provider Zefoy or Freer (default: Zefoy)\n  -c, --cookies <path>      File path to store session cookies (default: cookies.json)\n  -u, --user-agent <ua>     User agent to be used (default: random user-agent)\n  -p, --proxy <proxy>       The proxy to be used (example: http://localhost:8080)\n  -s, --proxies <path>      The path of the proxies file to use randomly (default: proxies.txt)\n  -n, --proxies-country <c> Filter proxies by country code (example: 'FR' or list 'ES,FR,IT')\n  -b, --browser <path>      Path to a browser executable to use instead of Chromium  \n  -r, --browser-remote <ws> Set browser WS endpoint to connect to an existing instance\n  -j, --browser-user <path> Set custom user data directory of browser (profile folder)\n  -w, --no-headless         Open visible browser window  \n  -k, --terminal-captcha    Terminal captcha instead of auto solver\n  -o, --log                 Write activity log (activity.log)\n  -m, --minimal             Hide ASCII art header\n  -d, --detach              Output mode for background processes\n  -x, --limit <int>         By the time the accumulation limit is reached\n  -z, --min-limit <int>     If it does not accumulate x amount in 60 minutes it stops\n  -f, --max-time <int>      Sets a maximum time limit in hours before stops\n  -a, --available-tasks     Returns the currently available tasks\n  -g, --session-status      Returns the session status\n  -i, --init-accums         Set a initial accumulation value (default: 0)\n  -e, --verbose             Display detailed processing information in logs\n  -rt, --retry-timeout      Waiting trying again timeout in minutes (default: 1)\n");
  process.exit(0);
}
if (a0P6.version) {
  console.log("1.1.1");
  process.exit(0);
}
const a0P9 = !!(a0P6.log === '');
const a0PP = !!(a0P6.minimal === '');
const a0Pf = !!(a0P6.detach === '');
const a0PS = !!(a0P6.verbose === '');
const a0PE = !(a0P6["no-headless"] === '');
const a0PJ = !!(a0P6["available-tasks"] === '');
const a0Pk = !!(a0P6["session-status"] === '');
const a0Pi = a0Z.platform() === "win32";
const a0PI = a0Z.platform() === "android";
const a0Pj = /Alpine/.test(a0Z.release()) || /PRoot-Distro/.test(a0Z.release());
const a0PL = a0P6["user-agent"];
const a0Pp = a0P6.proxy;
const a0Pl = a0P6.proxies;
const a0PB = a0P6["proxies-country"];
const a0PA = a0Pi ? ">" : "🤖";
const a0Pa = a0Pi ? "█" : "🟢";
const a0Pn = a0Pi ? "■" : "🔴";
const a0PU = a0Pi ? "▄" : "🟠";
const a0PK = a0Pi ? "▀" : "⚫️";
const a0Pu = a0Pi ? "»" : "🌐";
const a0Pv = a0Pi ? "»" : "🍪";
const a0PX = a0Pi ? "»" : "✅";
const a0PD = a0Pi ? "x" : "⛔️";
const a0Pr = a0Pi ? "»" : "🚦";
const a0Pe = a0Pi ? "!" : "🚨";
const a0Pb = a0Pi ? "$" : "💳";
const a0Pd = a0Pi ? "*" : "🧠";
const a0PO = a0Pi ? "»" : "🛡️";
const a0Po = a0P6["retry-timeout"];
var a0PZ;
var a0Pm;
var a0PT;
var a0Pc;
var a0PQ = 0;
var a0Pz = 0;
var a0PM = a0P6["init-accums"] && a0P6["init-accums"] > 0 ? parseInt(a0P6["init-accums"]) : 0;
var a0PF;
var a0PY = a0PL ?? a0P2[Math.floor(Math.random() * a0P2.length)];
var a0Pq;
var a0Px = [];
var a0Pt = a0Pp || '';
var a0f0 = 0;
var a0f1 = 0;
var a0f2 = 0;
var a0f3 = [];
var a0f4 = false;
var a0f5 = null;
var a0f6 = a0P6.provider === "Zefoy" ? "https://zefoy.com" : "https://homedecoratione.com/";
var a0f7 = a0P6.cookies === "cookies.json" && a0P6.provider === "Freer" ? "cookies2.json" : a0P6.cookies;
const a0f8 = a0ft(a0P1);
if (a0PJ) {
  const a0SW = a0P6.provider === "Zefoy" ? await a0fb() : await a0Si();
  console.log(a0SW.join(", "));
  process.exit(0);
}
if (a0Pk) {
  if (a0P6.provider === "Zefoy") {
    await a0fc(a0PE);
  } else {
    await a0Sj(a0PE);
  }
  process.exit(0);
}
if (!a0Pf) {
  if (a0PP) {
    console.log("[36m", "                                                          \nBotTok 1.1.1 TikTok Up Bot (by @jfadev)    Exit: [CTRL+C] \n", "[0m");
  } else {
    console.log("[36m", "                                                          \n@@@@@@@    @@@@@@   @@@@@@@   @@@@@@@   @@@@@@   @@@  @@@  \n@@@@@@@@  @@@@@@@@  @@@@@@@   @@@@@@@  @@@@@@@@  @@@  @@@  \n@@!  @@@  @@!  @@@    @@!       @@!    @@!  @@@  @@!  !@@  \n!@   @!@  !@!  @!@    !@!       !@!    !@!  @!@  !@!  @!!  \n@!@!@!@   @!@  !@!    @!!       @!!    @!@  !@!  @!@@!@!   \n!!!@!!!!  !@!  !!!    !!!       !!!    !@!  !!!  !!@!!!    \n!!:  !!!  !!:  !!!    !!:       !!:    !!:  !!!  !!: :!!   \n:!:  !:!  :!:  !:!    :!:       :!:    :!:  !:!  :!:  !:!  \n:: ::::  ::::: ::     ::        ::    ::::: ::   ::  :::  \n:: : ::    : :  :      :         :      : :  :    :   :::", "\n\nBotTok 1.1.1 TikTok Up Bot (by @jfadev)    Exit: [CTRL+C] \n", "[0m");
    console.log(a0Pe + " Find help in Telegram (https://t.me/bottok_help)\n");
  }
}
async function a0f9() {
  if (!a0f8.includes(await a0fu()) && a0Pf) {
    console.info("BotTok 1.1.1 TikTok Up Bot (by @jfadev)\n\n", "You are using the FREE version!\n", "The --detach or -d mode is exclusive to Premium mode\n", "and allows BotTok to be launched as background processes.\n", a0Pb + " Buy license in[35m " + "https://bit.ly/bottok-premium" + "[0m\n");
    process.exit(0);
  }
  try {
    let S = await a0fW();
    if (S === "License") {
      S = await a0fP();
    }
    if (S === "License (VERIFIED)") {
      S = await a0ff();
    }
    if (S === "Zefoy Tasks") {
      await a0fS();
    }
    if (S === "Freer Tasks") {
      await a0S5();
    }
    if (S === "Updates") {
      await a0fE();
    }
    if (S === "Help") {
      await a0fJ();
    }
    if (S === "Exit") {
      process.exit(0);
    }
  } catch (W) {
    a0fY(W);
    await a0fF(10000);
    await a0f9();
  }
}
async function a0fP() {
  await a0fv();
  await a0fC();
  await a0f9();
}
async function a0ff() {
  if (!a0Pf) {
    process.stdout.moveCursor(0, -1);
    process.stdout.clearScreenDown();
  }
  await a0f9();
}
async function a0fS(P = true) {
  a0f6 = "https://zefoy.com";
  await a0fO(P, a0PE);
  let S = await a0fk();
  let E = await a0fV(S);
  if (!E) {
    await a0fS(false);
    return;
  }
  const J = await a0fN();
  await a0fB(E, J, S);
}
async function a0fE() {
  if (!a0Pf) {
    process.stdout.moveCursor(0, -4);
    process.stdout.clearScreenDown();
  }
  const f = a0c("https://api.github.com/repos/jfadev/bottok/releases/latest");
  const S = f.json().tag_name;
  const J = !!(S === "v1.1.1");
  const k = await a0fz();
  const i = await a0fQ(k);
  console.log("\n");
  console.log("Your OS:".padEnd(14), a0Z.type(), a0Z.release());
  console.log("Your Version:".padEnd(14), "v1.1.1", J ? " (Latest)" : "(Outdated)");
  console.log("Your IP:".padEnd(14), k + " [" + i + "]");
  console.log("\n");
  console.log("Releases:");
  const I = a0c("https://api.github.com/repos/jfadev/bottok/releases");
  const j = I.json();
  j.forEach(W => {
    console.log(W.tag_name === "v1.1.1" ? "> " : '', W.tag_name, W.tag_name === S ? " (Latest)" : '');
  });
  if (!J) {
    console.log("\n");
    console.log("Type the following " + a0Z.type() + " command");
    console.log("to updade to the latest version (" + S + "):\n");
    if (a0Pi) {
      console.log("win-update.bat");
    } else {
      if (a0PI) {
        console.log("./alpine-update.sh");
      } else if (a0Pj) {
        console.log("./alpine-update.sh");
      } else {
        console.log("./ubuntu-update.sh");
      }
    }
  }
  console.log("\n");
  process.exit(0);
}
async function a0fJ() {
  if (!a0Pf) {
    process.stdout.moveCursor(0, -4);
    process.stdout.clearScreenDown();
    console.log("\nUsage: node bottok.js [options]\n\nOptions:\n  -h, --help                Show help\n  -v, --version             BotTok version\n  -l, --video <link>        TikTok video URL to perform the task on\n  -t, --task <task>         Task to perform on the TikTok video (example: 'Up Views')\n  -q, --provider <prov>     Provider Zefoy or Freer (default: Zefoy)\n  -c, --cookies <path>      File path to store session cookies (default: cookies.json)\n  -u, --user-agent <ua>     User agent to be used (default: random user-agent)\n  -p, --proxy <proxy>       The proxy to be used (example: http://localhost:8080)\n  -s, --proxies <path>      The path of the proxies file to use randomly (default: proxies.txt)\n  -n, --proxies-country <c> Filter proxies by country code (example: 'FR' or list 'ES,FR,IT')\n  -b, --browser <path>      Path to a browser executable to use instead of Chromium  \n  -r, --browser-remote <ws> Set browser WS endpoint to connect to an existing instance\n  -j, --browser-user <path> Set custom user data directory of browser (profile folder)\n  -w, --no-headless         Open visible browser window  \n  -k, --terminal-captcha    Terminal captcha instead of auto solver\n  -o, --log                 Write activity log (activity.log)\n  -m, --minimal             Hide ASCII art header\n  -d, --detach              Output mode for background processes\n  -x, --limit <int>         By the time the accumulation limit is reached\n  -z, --min-limit <int>     If it does not accumulate x amount in 60 minutes it stops\n  -f, --max-time <int>      Sets a maximum time limit in hours before stops\n  -a, --available-tasks     Returns the currently available tasks\n  -g, --session-status      Returns the session status\n  -i, --init-accums         Set a initial accumulation value (default: 0)\n  -e, --verbose             Display detailed processing information in logs\n  -rt, --retry-timeout      Waiting trying again timeout in minutes (default: 1)\n");
  }
  process.exit(0);
}
async function a0fk(S = null) {
  const E = {
    "JvmIK": function (J, k) {
      return J(k);
    },
    "USlrB": function (J, k) {
      return J(k);
    },
    "WfuBw": function (J) {
      return J();
    },
    "IFZsp": function (J, k) {
      return J / k;
    },
    "FSXpA": "QekzP",
    "EEckP": function (J, k) {
      return J !== k;
    },
    "eXgAN": "JuTez",
    "sxEmb": function (J, k) {
      return J(k);
    },
    "JDtZj": function (J, k) {
      return J === k;
    },
    "IrPyr": "terminal-captcha",
    "dDOTc": function (J, k) {
      return J(k);
    },
    "iPTgZ": "caaXJ",
    "vhJnI": function (J, k) {
      return J(k);
    },
    "nTlVg": "DWMfO",
    "FQhge": function (J, k) {
      return J !== k;
    },
    "KfPvs": "qUlXR",
    "dLuWl": "QHPIy",
    "Ecxsx": function (J, k) {
      return J(k);
    },
    "JhDFs": "YjPLP",
    "fTbqH": function (J) {
      return J();
    }
  };
  try {
    if (!a0T.existsSync(a0f7)) {
      if ("QekzP" !== E.FSXpA) {
        const j = [...S.matchAll(/@(\w+)\n(.+)\n(\d+\s\w+\sago)\n([\d|\,]+)/g)];
        return j.map(y => {
          return {
            "username": y[1],
            "comment": y[2],
            "timestamp": y[3],
            "likes": E.JvmIK(/@(\w+)\n(.+)\n(\d+\s\w+\sago)\n([\d|\,]+)/g, y[4].replace(/[,\.]/g, '')),
            "concat": "@" + y[1] + " \"" + y[2].substring(0, 10) + "...\" " + y[3] + " (" + y[4] + ")"
          };
        });
      } else {
        if (!a0Pq) {
          if (E.EEckP(E.eXgAN, E.eXgAN)) {
            E.USlrB(g, "[" + V + "] " + N + " (+" + h + ") [" + L + "] Stopped for not accumulating the defined minimum! (in " + p() + " mins)");
            if (!B) {
              A.stdout.clearLine(0);
              a.stdout.cursorTo(0);
              n.stdout.write(U + " Stopped for not accumulating the defined minimum!");
            }
            s.exit(0);
          } else {
            a0Pq = await E.USlrB(a0fX, a0PE);
          }
        }
        S = (await a0Pq.pages())[0];
        const k = {
          timeout: 0x0
        };
        await S.goto(a0f6, k);
        await E.sxEmb(a0fF, 3000);
        if (E.JDtZj(a0P6[E.IrPyr], '')) {
          await E.dDOTc(a0fI, S);
        } else if (E.JDtZj(E.iPTgZ, "caaXJ")) {
          await E.vhJnI(a0fj, S);
        } else {
          E = J.get(k);
        }
      }
    }
    if (!S) {
      if (a0Pq) {
        if (E.nTlVg !== "NGzCo") {
          S = (await a0Pq.pages())[0];
        } else {
          j = '';
        }
      } else if (E.FQhge(E.KfPvs, E.dLuWl)) {
        a0Pq = await E.USlrB(a0fX, a0PE);
        S = (await a0Pq.pages())[0];
      } else {
        g.stdout.moveCursor(0, -3);
        V.stdout.clearScreenDown();
        N.stdout.write("\n" + h + "[33m " + L + " [34m[" + p + "][0m " + B + "  [90m(" + E.WfuBw(G) + " /hr " + E.IFZsp(E.WfuBw(R), 60).toFixed(2) + " hrs)[0m\n\n");
        H.stdout.write(w + " Running: " + s.substring(0, 43));
      }
      const j = {};
      j.timeout = 0x0;
      await S.goto(a0f6, j);
    }
    return await E.Ecxsx(a0fi, S);
  } catch (C) {
    return E.EEckP(E.JhDFs, "YjPLP") ? null : (await E.fTbqH(a0fA), await E.Ecxsx(a0fF, 1000), await E.fTbqH(a0fk));
  }
}
async function a0fi(f) {
  if (!a0Pf && !a0PJ) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(a0Pu + " Launch Zefoy in headless browser...");
  } else {
    a0fY("Launch Zefoy in headless browser...");
  }
  await a0fF(1000);
  const E = await a0fa();
  const J = E.find(y => y.name === "PHPSESSID");
  a0PF = J.value;
  if (!a0Pf && !a0PJ) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(a0Pu + " SESSID: " + a0PF);
  } else {
    a0fY("SESSID: " + a0PF);
  }
  await a0fF(1000);
  await f.setCookie(...E);
  const k = {
    timeout: 0x0
  };
  await f.goto(a0f6, k);
  if (!a0Pf && !a0PJ) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(a0Pv + " Cookies injected! (" + a0f7 + ")");
  } else {
    a0fY("Cookies injected! (" + a0f7 + ")");
  }
  a0fY("Load session (SESSID: " + a0PF + ")...");
  await a0fF(3000);
  const i = await f.content();
  if (/_cf_chl_opt/.test(i)) {
    await a0fA();
    await a0fF(1000);
    await a0fO();
    return await a0fi(f);
  }
  if (/submit-captcha/.test(i)) {
    if (a0P6["terminal-captcha"] === '') {
      await a0fI(f);
    } else {
      await a0fj(f);
    }
  }
  return f;
}
async function a0fI(S) {
  if (!a0Pf) {
    process.stdout.cursorTo(0);
    process.stdout.write(a0Pr + " Solve the captcha manually...");
  } else {
    a0fY("Solve the captcha manually...");
  }
  await S.evaluate("(() => {\n      const button = document.querySelector(\"button.fc-button.fc-cta-consent.fc-primary-button\");\n      if (button) {\n        button.click();\n      }\n    })();");
  await a0fF(1000);
  await S.screenshot({
    "path": "captcha.png",
    "clip": {
      "x": 0xff,
      "y": 0x156,
      "width": 214,
      "height": 0x7e
    }
  });
  if (!a0Pf) {
    console.log("\n");
    const C = {
      width: 0x40
    };
    console.log(await a0M.file("captcha.png", C));
  }
  const J = {
    type: "input",
    name: "captcha",
    message: "Write a Captcha:"
  };
  const k = await a0m.prompt([J]);
  const i = k.captcha;
  await a0T.promises.unlink("captcha.png");
  await S.waitForSelector("input[type=text]");
  await S.$eval("input[type=text]", (g, V) => g.value = V, i);
  await S.evaluate("(() => {\n      document\n        .querySelector(\"button.btn.btn-primary.btn-lg.btn-block\")\n        .click();\n    })();");
  if (!a0Pf) {
    process.stdout.moveCursor(0, a0PI || a0Pj ? -22 : -23);
    process.stdout.clearScreenDown();
  }
  await S.waitForNavigation();
  const I = parseInt(await S.evaluate("(() => {\n      return document.querySelector('#errorcapthcaclose') === null ? 1 : 0;\n    })();"));
  if (I) {
    if (!a0Pf) {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(a0PX + " Captcha resolved! (" + i + ")");
    } else {
      a0fY("Captcha resolved! (" + i + ")");
    }
    const V = await S.cookies();
    await a0fw(V);
    await a0fF(2000);
  } else {
    if (!a0Pf) {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(a0PD + " Wrong captcha! (" + i + ")");
    } else {
      a0fY("Wrong captcha! (" + i + ")");
    }
    await a0fF(2000);
    await a0fI(S);
  }
}
async function a0fj(P) {
  const S = Math.random().toString(36).substring(2, 10) + "-";
  if (!a0Pf && !a0PJ) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(a0Pd + " Solve captcha automatically...");
  } else {
    a0fY("Solve captcha automatically...");
  }
  await P.evaluate("(() => {\n      const button = document.querySelector(\"button.fc-button.fc-cta-consent.fc-primary-button\");\n      if (button) {\n        button.click();\n      }\n    })();");
  await a0fF(1000);
  await P.screenshot({
    "path": S + "captcha.png",
    "clip": {
      "x": 0xff,
      "y": 0x156,
      "width": 214,
      "height": 0x7e
    }
  });
  await a0fF(200);
  const E = await a0S3((await a0fy(S + "captcha.png")).replace(/(\r\n|\n|\r| )/gm, ''));
  await a0T.promises.unlink(S + "captcha.png");
  await P.waitForSelector("input[type=text]");
  await P.$eval("input[type=text]", (I, j) => I.value = j, E);
  await P.evaluate("(() => {\n      document\n        .querySelector(\"button.btn.btn-primary.btn-lg.btn-block\")\n        .click();\n    })();");
  await P.waitForNavigation();
  const J = parseInt(await P.evaluate("(() => {\n      return document.querySelector('#errorcapthcaclose') === null ? 1 : 0;\n    })();"));
  if (J) {
    if (!a0Pf && !a0PJ) {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(a0PX + " Captcha resolved! (" + E + ")");
    } else {
      a0fY("Captcha resolved! (" + E + ")");
    }
    const j = await P.cookies();
    await a0fw(j);
    await a0fF(2000);
  } else {
    if (!a0Pf && !a0PJ) {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(a0PD + " Wrong captcha! (" + E + ")");
    } else {
      a0fY("Wrong captcha! (" + E + ")");
    }
    await a0fF(2000);
    await a0fj(P);
  }
}
async function a0fy(P) {
  return new Promise((S, E) => {
    a0F.recognize(P, "eng").then(({
      data: {
        text: k
      }
    }) => {
      S(k);
    });
  });
}
async function a0fW() {
  if (a0P6.task) {
    return a0P6.provider === "Zefoy" ? "Zefoy Tasks" : "Freer Tasks";
  } else {
    const i = a0f8.includes(await a0fu());
    const I = {
      name: "Freer Tasks"
    };
    const j = {
      name: "Updates"
    };
    const y = {
      name: "Help"
    };
    const W = {
      type: "list",
      name: "menu",
      message: "Choose an option",
      choices: [{
        "name": "Zefoy Tasks"
      }, I, {
        "name": i ? "License (VERIFIED)" : "License"
      }, j, y, {
        "name": "Exit"
      }]
    };
    const C = await a0m.prompt([W]);
    return C.menu;
  }
}
async function a0fC() {
  if (a0f8.includes(await a0fu())) {
    if (!a0Pf) {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(a0PX + " LICENSE IS VERIFIED!");
    }
  } else {
    console.info("\n", "You are using the FREE version limited to ~50000000\n", "accumulations. The advantage of acquiring the\n", "license is that the bot continues to work\n", "indefinitely and accumulates large amounts.\n", a0Pb + " Buy license in[35m " + "https://bit.ly/bottok-premium" + "[0m\n");
    const J = {
      type: "list",
      name: "choice",
      message: "Do you want unlock this limitation?",
      choices: [{
        "name": "Add License Key"
      }, {
        "name": "Back"
      }]
    };
    const k = await a0m.prompt([J]);
    if (k.choice === "Add License Key") {
      if (!a0Pf) {
        process.stdout.moveCursor(0, -1);
        process.stdout.clearScreenDown();
      }
      return await a0fg();
    }
    if ((await k.choice) === "Back") {
      if (!a0Pf) {
        process.stdout.moveCursor(0, -9);
        process.stdout.clearScreenDown();
      }
      await a0f9();
    }
  }
}
async function a0fg() {
  const S = {
    type: "input",
    name: "license",
    message: "Paste your License Key here:"
  };
  const E = await a0m.prompt([S]);
  const J = E.license;
  await a0fK(J);
  if (!a0Pf) {
    process.stdout.moveCursor(0, -9);
    process.stdout.clearScreenDown();
  }
  await a0f9();
}
async function a0fV(S) {
  let J = await S.evaluate("(() => {\n      let choices = Array.from(document.querySelectorAll(\".card-body\"));\n      choices = choices.map((c) => {\n        const parts = c.innerText.replace(" + /(\r\n|\n|\r)/gm + ", \" \").split(\"  \");\n        return {\n          name: 'Up ' + parts[0],\n          disabled:" + /soon/ + ".test(parts[1]) ? true : false,\n        };\n      });\n      return choices.filter((c) => !c.disabled);\n    })();");
  if (J[0].name === "Up ") {
    return false;
  }
  const k = {
    name: "Back"
  };
  J.push(k);
  if (!a0Pf) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
  }
  if (a0P6.task) {
    return a0P6.task;
  } else {
    const j = {
      type: "list",
      name: "mode",
      message: "What task do you want me to do?",
      choices: J
    };
    const y = await a0m.prompt([j]);
    if ((await y.mode) === "Back") {
      if (!a0Pf) {
        process.stdout.moveCursor(0, -2);
        process.stdout.clearScreenDown();
      }
      await a0f9();
    }
    return y.mode;
  }
}
async function a0fN() {
  if (a0P6.video) {
    let k = await a0fU();
    if (!k.some(i => i.url === a0P6.video)) {
      k.push({
        "url": a0P6.video,
        "timestamp": new Date().getTime()
      });
      await a0fn(k);
    }
    if (!a0Pf) {
      console.log("Video:[36m " + a0P6.video + " [0m");
    }
    return a0P6.video;
  } else {
    const j = {
      name: "Recent Videos"
    };
    const y = {
      name: "New Video"
    };
    const W = {
      name: "Back"
    };
    const C = [j, y, W];
    const g = {
      type: "list",
      name: "choice",
      message: "Would you like to select a recent video?",
      choices: C
    };
    const V = await a0m.prompt([g]);
    if (V.choice === "Recent Videos") {
      return await a0fh();
    }
    if ((await V.choice) === "Back") {
      if (!a0Pf) {
        process.stdout.moveCursor(0, -3);
        process.stdout.clearScreenDown();
      }
      await a0f9();
    }
    return await a0fL();
  }
}
async function a0fh() {
  let E = await a0fU();
  E = E.map(I => {
    const j = {
      name: I.url
    };
    return j;
  });
  const J = {
    name: "Back"
  };
  E.push(J);
  const k = {
    type: "list",
    name: "url",
    message: "Select a video from the history",
    choices: E
  };
  const i = await a0m.prompt([k]);
  if ((await i.url) === "Back") {
    if (!a0Pf) {
      process.stdout.moveCursor(0, -2);
      process.stdout.clearScreenDown();
    }
    return await a0fN();
  }
  return i.url;
}
async function a0fL() {
  const S = {
    type: "input",
    name: "url",
    message: "What is the URL of your Tiktok video?"
  };
  const E = await a0m.prompt([S]);
  const J = E.url;
  let k = await a0fU();
  if (!k.some(i => i.url === J)) {
    k.push({
      "url": J,
      "timestamp": new Date().getTime()
    });
    await a0fn(k);
  }
  return J;
}
function a0fp(P) {
  const E = [...P.matchAll(/@(\w+)\n(.+)\n(\d+\s\w+\sago)\n([\d|\,]+)/g)];
  return E.map(J => {
    return {
      "username": J[1],
      "comment": J[2],
      "timestamp": J[3],
      "likes": parseInt(J[4].replace(/[,\.]/g, '')),
      "concat": "@" + J[1] + " \"" + J[2].substring(0, 10) + "...\" " + J[3] + " (" + J[4] + ")"
    };
  });
}
async function a0fl(S) {
  let J = S.map(j => {
    const W = {
      name: j.concat
    };
    return W;
  });
  const k = {
    name: "Back"
  };
  J.push(k);
  const i = {
    type: "list",
    name: "concat",
    message: "Select a comment",
    choices: J
  };
  const I = await a0m.prompt([i]);
  if ((await I.concat) === "Back") {
    if (!a0Pf) {
      process.stdout.moveCursor(0, -6);
      process.stdout.clearScreenDown();
    }
    await a0f9();
  }
  return J.findIndex(y => y.name === I.concat);
}
async function a0fB(f, S, E, J = false) {
  try {
    a0PZ = a0PZ || process.hrtime();
    const I = new Map([["Up Followers", [".t-followers-button", ".t-followers-menu"]], ["Up Hearts", [".t-hearts-button", ".t-hearts-menu"]], ["Up Comments Hearts", [".t-chearts-button", ".t-chearts-menu"]], ["Up Views", [".t-views-button", ".t-views-menu"]], ["Up Shares", [".t-shares-button", ".t-shares-menu"]], ["Up Favorites", [".t-favorites-button", ".t-favorites-menu"]], ["Up Livestream [VS+LIKES]", [".t-livestream-button", ".t-livestream-menu"]]]);
    let j = ".t-views-button";
    let y = ".t-views-menu";
    if (I.has(f)) {
      [j, y] = I.get(f);
    }
    await E.evaluate("(() => {\n        document.querySelector(\"" + j + "\").click();\n      })();");
    await E.waitForSelector(y);
    await E.$eval(y + " > div > form > div > input", (C, g) => C.value = g, S);
    await E.evaluate("(() => {\n        document\n          .querySelector(\"" + y + " > div > form > div > div > button\")\n          .click();\n      })();");
    if (!J && !a0Pf) {
      console.log("\n\n");
    }
    a0fY(f + " task running...");
    a0Pm = await a0fR(E, y, f, S);
    a0PT = await a0fH(E, y);
    a0Pc = await a0fG(E, y, f, S);
  } catch (g) {
    a0fY(g);
    await a0fA();
    await a0fF(2000);
    E = await a0fk(E);
    const L = {
      timeout: 0x0
    };
    await E.goto(a0f6, L);
    a0fB(f, S, E, true);
    return;
  }
}
async function a0fG(P, f, S, E) {
  return setInterval(async () => {
    let i = await P.evaluate("(() => {\n        return document.querySelector(\"" + f + " > div > div\").innerText;\n      })();");
    i = i.replace(/(\r\n|\n|\r)/gm, " ");
    if (/limit/.test(i) || /error/.test(i) || /not working/.test(i) || /valid video/.test(i) || /again later/.test(i) || /error/.test(i) || /expired/.test(i) || /many requests/.test(i) || /found/.test(i)) {
      clearInterval(a0Pm);
      clearInterval(a0PT);
      clearInterval(a0Pc);
      let I = await a0fQ(a0Pt);
      let j = '';
      if (a0Pz > 0) {
        j = "[32m+" + a0Pz + "[0m";
      } else {
        j = '';
      }
      if (/expired/.test(i)) {
        await a0fA();
        await a0fF(2000);
      }
      if (/many requests/.test(i) || /again later/.test(i) || /not working/.test(i) || /valid video/.test(i)) {
        if (!a0Pf) {
          process.stdout.moveCursor(0, -3);
          process.stdout.clearScreenDown();
          process.stdout.write("\n" + a0PA + "[33m " + S + " [34m[" + I + "][0m " + j + "  [90m(" + a0fx() + " /hr " + (((process.hrtime()[0] * 1000000000 + process.hrtime()[1] - (a0PZ[0] * 1000000000 + a0PZ[1])) / 60000000000).toFixed(2) / 60).toFixed(2) + " hrs)[0m\n\n");
          process.stdout.write(a0PU + " Waiting: " + a0Po + " mins (ERROR: " + i.substring(0, 24) + ")...");
        }
        a0fY("Waiting " + a0Po + " mins (ERROR: " + i + ")...");
        await a0fF(a0Po * 60 * 1000);
      }
      if (!a0Pf) {
        process.stdout.moveCursor(0, -3);
        process.stdout.clearScreenDown();
        process.stdout.write("\n" + a0PA + "[33m " + S + " [34m[" + I + "][0m " + j + "  [90m(" + a0fx() + " /hr " + (((process.hrtime()[0] * 1000000000 + process.hrtime()[1] - (a0PZ[0] * 1000000000 + a0PZ[1])) / 60000000000).toFixed(2) / 60).toFixed(2) + " hrs)[0m\n\n");
        process.stdout.write(a0Pa + " Running: Trying again (ERROR: " + i.substring(0, 24) + ")...");
      }
      a0fY("Trying again (ERROR: " + i + ")...");
      P = await a0fk(P);
      const y = {
        timeout: 0x0
      };
      await P.goto(a0f6, y);
      a0fB(S, E, P, true);
      return;
    }
  }, 20000);
}
async function a0fR(P, f, S, E, J = null) {
  let i = 0;
  let I = '';
  let j = false;
  let y = 0;
  let W = await a0fQ(a0Pt);
  return setInterval(async () => {
    let V = await P.evaluate("(() => {\n        return document.querySelector(\"" + f + " > div > div\").innerText;\n      })();");
    let N = a0fp(V);
    if (/@/.test(V) && J === null) {
      if (!a0Pf) {
        process.stdout.moveCursor(0, -3);
        process.stdout.cursorTo(0);
        process.stdout.clearScreenDown();
      }
      clearInterval(a0Pm);
      clearInterval(a0PT);
      J = await a0fl(N);
      a0Pm = await a0fR(P, f, S, E, J);
      a0PT = await a0fH(P, f, J);
      console.log("\n\n");
    }
    V = V.replace(/(\r\n|\n|\r)/gm, " ");
    let h = a0Pa;
    h = /limit/.test(V) ? a0Pn : h;
    h = /error/.test(V) ? a0Pn : h;
    h = /not working/.test(V) ? a0Pn : h;
    h = /valid video/.test(V) ? a0Pn : h;
    h = /again later/.test(V) ? a0Pn : h;
    h = /error/.test(V) ? a0Pn : h;
    h = /found/.test(V) ? a0Pn : h;
    h = /expired/.test(V) ? a0Pn : h;
    h = /many requests/.test(V) ? a0Pn : h;
    h = /wait/.test(V) ? j ? a0PU : a0PK : h;
    if (J !== null && N.length) {
      i = N[J].likes;
      if (a0PQ === 0) {
        if (a0PM === 0) {
          a0PQ = i;
        } else {
          a0PQ = i - a0PM;
        }
      }
      a0Pz = Math.abs(i - a0PQ);
      V = N[J].concat;
      if (a0Pz !== y) {
        a0fY("[" + S + "] " + i + " (+" + a0Pz + ") " + E);
      }
      y = a0Pz;
    } else {
      const s = V.replace(" ", '').match(/\d+(,\d+)*(?![^,])/g);
      if (s && S !== "Up Comments Hearts") {
        i = parseInt(s[0].replace(/[,\.]/g, ''));
        if (a0PQ === 0) {
          if (a0PM === 0) {
            a0PQ = i;
          } else {
            a0PQ = i - a0PM;
          }
        }
        a0Pz = Math.abs(i - a0PQ);
        if (a0Pz !== y) {
          a0fY("[" + S + "] " + i + " (+" + a0Pz + ") " + E);
        }
        y = a0Pz;
      }
    }
    if (a0Pz > 0) {
      I = "[32m+" + a0Pz + "[0m";
    } else {
      I = '';
    }
    if (!a0f8.includes(await a0fu()) && a0Pz > Math.sqrt(25000000)) {
      h = a0Pn;
      clearInterval(a0Pm);
      clearInterval(a0PT);
      clearInterval(a0Pc);
      await a0fv();
      setTimeout(async () => {
        console.info("\n\n", "You are using the FREE version limited to ~50000000\n", "accumulations. The advantage of acquiring the\n", "license is that the bot continues to work\n", "indefinitely and accumulates large amounts.\n", a0Pb + " Buy license in[35m " + "https://bit.ly/bottok-premium" + "[0m\n");
      }, 100);
    }
    if (a0P6.limit && a0P6.limit > 0 && a0Pz > a0P6.limit) {
      a0fY("[" + S + "] " + i + " (+" + a0Pz + ") [" + E + "] Accumulation limit reached! (in " + ((process.hrtime()[0] * 1000000000 + process.hrtime()[1] - (a0PZ[0] * 1000000000 + a0PZ[1])) / 60000000000).toFixed(2) + " mins)");
      if (!a0Pf) {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write(a0PK + " Accumulation limit reached!");
      }
      process.exit(0);
    }
    if (a0P6["min-limit"] && a0P6["min-limit"] > 0 && a0Pz < a0P6["min-limit"] && ((process.hrtime()[0] * 1000000000 + process.hrtime()[1] - (a0PZ[0] * 1000000000 + a0PZ[1])) / 60000000000).toFixed(2) > 60) {
      a0fY("[" + S + "] " + i + " (+" + a0Pz + ") [" + E + "] Stopped for not accumulating the defined minimum! (in " + ((process.hrtime()[0] * 1000000000 + process.hrtime()[1] - (a0PZ[0] * 1000000000 + a0PZ[1])) / 60000000000).toFixed(2) + " mins)");
      if (!a0Pf) {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write(a0PK + " Stopped for not accumulating the defined minimum!");
      }
      process.exit(0);
    }
    if (a0P6["max-time"] && a0P6["max-time"] > 0 && ((process.hrtime()[0] * 1000000000 + process.hrtime()[1] - (a0PZ[0] * 1000000000 + a0PZ[1])) / 60000000000).toFixed(2) > a0P6["max-time"] * 60) {
      a0fY("[" + S + "] " + i + " (+" + a0Pz + ") [" + E + "] Stopped for reaching the maximum time limit! (in " + ((process.hrtime()[0] * 1000000000 + process.hrtime()[1] - (a0PZ[0] * 1000000000 + a0PZ[1])) / 60000000000).toFixed(2) + " mins)");
      if (!a0Pf) {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write(a0PK + " Stopped for reaching the maximum time limit!");
      }
      process.exit(0);
    }
    if (!a0Pf) {
      process.stdout.moveCursor(0, -3);
      process.stdout.clearScreenDown();
      process.stdout.write("\n" + a0PA + "[33m " + S + " [34m[" + W + "][0m " + I + "  [90m(" + a0fx() + " /hr " + (((process.hrtime()[0] * 1000000000 + process.hrtime()[1] - (a0PZ[0] * 1000000000 + a0PZ[1])) / 60000000000).toFixed(2) / 60).toFixed(2) + " hrs)[0m\n\n");
      process.stdout.write(h + " Running: " + V.substring(0, 43));
    }
    if ((a0P9 || a0Pf) && a0PS) {
      a0fY("[" + S + "] " + i + " (+" + a0Pz + ") [" + E + "] Running: " + V);
    }
    j = !j;
  }, 1000);
}
async function a0fH(f, S, E = null) {
  const J = {
    OwZFK: function (i, I) {
      return i + I;
    },
    gRamU: " Solve captcha automatically...",
    hSJqI: function (i, I) {
      return i !== I;
    },
    TwaFP: "TJqGD",
    yBUJL: function (i, I) {
      return i === I;
    },
    lQTsa: "hKeDZ",
    LWOSv: "rBjMJ",
    fJqFU: "hcjcJ",
    QHhnr: "kSUbE",
    rvGee: function (i, I) {
      return i !== I;
    },
    TNTKj: function (i, I) {
      return i === I;
    },
    gJaTP: "jkkpQ",
    YRAbu: "RMdgk"
  };
  const k = J;
  return setInterval(async () => {
    if (k.hSJqI(k.TwaFP, k.TwaFP)) {
      S = E;
    } else {
      try {
        if (k.yBUJL(k.lQTsa, k.LWOSv)) {
          S("SESSID: " + E);
        } else {
          await f.evaluate("(() => {\n          document.querySelector(\"button.wbutton\").click();\n        })();");
        }
      } catch (y) {}
      let I = await f.evaluate("(() => {\n        return document.querySelector(\"" + S + " > div > div\").innerText;\n      })();");
      if (/READY/.test(I)) {
        if (k.hSJqI(k.fJqFU, k.QHhnr)) {
          await f.evaluate("(() => {\n          document\n            .querySelector(\"" + S + " > div > form > div > div > button\")\n            .click();\n        })();");
        } else {
          J.stdout.clearLine(0);
          k.stdout.cursorTo(0);
          i.stdout.write(k.OwZFK(I, k.gRamU));
        }
      }
      if (/@/.test(I) && k.rvGee(E, null)) {
        if (k.TNTKj(k.gJaTP, k.YRAbu)) {
          const g = E.apply(J, arguments);
          k = null;
          return g;
        } else {
          await f.evaluate("(() => {\n          document\n            .querySelectorAll(\"" + S + " > div > div > form > ul > li > div > button\")[" + E + "]\n            .click();\n        })();");
        }
      }
    }
  }, 50000000);
}
async function a0fw(f) {
  try {
    const E = {
      domain: "bt.com",
      name: "bt_proxy",
      value: a0Pt
    };
    f.push(E);
    f.push({
      "domain": "bt.com",
      "name": "user_agent",
      "value": encodeURIComponent(a0PY)
    });
    await a0T.promises.writeFile(a0f7, JSON.stringify(f));
  } catch (k) {}
}
async function a0fs(P) {
  try {
    const E = await a0fa();
    P = JSON.parse(P);
    if (E.length === 0) {
      await a0T.promises.writeFile(a0f7, JSON.stringify(P));
    } else {
      const i = E.map(I => {
        const y = P.find(W => W.name === I.name);
        return y || I;
      });
      await a0T.promises.writeFile(a0f7, JSON.stringify(i));
    }
  } catch (I) {}
}
async function a0fA() {
  try {
    if (a0T.existsSync(a0f7)) {
      if (!a0Pf && !a0PJ) {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write(a0PD + " Cookies invalid/expired!");
      }
      await a0T.promises.unlink(a0f7);
    }
  } catch (J) {}
}
async function a0fa() {
  try {
    const S = await a0T.promises.readFile(a0f7);
    return JSON.parse(S);
  } catch (E) {
    return [];
  }
}
async function a0fn(f) {
  const S = {};
  S.CGQKm = "dvkIq";
  const E = S;
  try {
    if (E.CGQKm === E.CGQKm) {
      await a0T.promises.writeFile("links.json", JSON.stringify(f));
    } else {
      S = "[32m+" + E + "[0m";
    }
  } catch (k) {}
}
async function a0fU() {
  try {
    const S = await a0T.promises.readFile("links.json");
    let E = JSON.parse(S);
    E.sort((J, k) => k.timestamp - J.timestamp);
    return E;
  } catch (J) {
    return [];
  }
}
async function a0fK(f) {
  try {
    const J = {
      license: f
    };
    await a0T.promises.writeFile("license.json", JSON.stringify(J));
  } catch (k) {}
}
async function a0fu() {
  try {
    const J = await a0T.promises.readFile("license.json");
    let k = JSON.parse(J);
    return k.license;
  } catch (i) {
    return false;
  }
}
async function a0fv() {
  if (a0f8.includes(await a0fu())) {
    return;
  }
  try {
    const E = await a0fX(false);
    const J = (await E.pages())[0];
    const k = {
      timeout: 0x0
    };
    await J.goto("https://bit.ly/bottok-premium", k);
  } catch (i) {}
}
async function a0fX(E = true) {
  const k = a0P6.browser || a0Q.executablePath();
  if (!a0Pf && !a0PJ) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(a0Pu + (" Check browser (" + k.substring(0, 34) + ")..."));
  } else {
    a0fY("Check browser (" + k + ")...");
  }
  await a0fF(1000);
  if (await a0S4(k)) {
    if (!a0Pf && !a0PJ) {
      process.stdout.clearLine(1);
      process.stdout.cursorTo(0);
      process.stdout.write(a0PX + " Chrome/Chromium executable is valid!" + " ".repeat(17));
    } else {
      a0fY("Chrome/Chromium executable is valid!");
    }
  } else {
    if (!a0Pf && !a0PJ) {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(a0PD + " Chrome/Chromium executable is invalid!" + " ".repeat(15));
      console.info("\n\n", "Executable not found in the following path:\n", "\"" + k + "\"\n", "Use the -b flag to set the path to the browser.");
    } else {
      a0fY("Chrome/Chromium executable is invalid!");
    }
    process.exit(1);
  }
  await a0fF(1000);
  if (a0T.existsSync(a0f7)) {
    const B = await a0fa();
    const G = B.find(H => H.name === "user_agent");
    a0PY = G ? decodeURIComponent(G.value) : a0PY;
    const R = B.find(H => H.name === "bt_proxy");
    a0Pt = R?.["value"] || a0Pt;
  }
  let i = a0Pt;
  let I = await a0fQ(a0Pt);
  if (!a0Pf && !a0PJ) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(a0Pu + " UA: " + a0PY.substring(0, 48));
  } else {
    a0fY("UA: " + a0PY);
  }
  let j = ["--no-sandbox", "--window-size=900,900", "--window-position=200,0", "--user-agent=" + a0PY, "--proxy-server=" + i];
  if (a0Pi) {
    j = [...j, "--disable-gpu", "--disable-gpu-compositing"];
  }
  if (!a0Pf && !a0PJ) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(a0Pu + (i ? " Launch browser (proxy: " + i + " [" + I + "])..." : " Launch browser..."));
    await a0fF(1000);
  }
  a0fY(i ? "Launch browser (proxy: " + i + " [" + I + "])..." : "Launch browser...");
  let y;
  if (a0P6["browser-remote"]) {
    const A = {
      browserWSEndpoint: a0P6["browser-remote"]
    };
    y = await a0Q.connect(A);
  } else {
    const n = {
      width: 0x384,
      height: 0x384
    };
    const U = {
      headless: E,
      args: j,
      defaultViewport: n,
      executablePath: a0P6.browser,
      userDataDir: a0P6["browser-user"]
    };
    y = await a0Q.launch(U);
  }
  if (!a0Pf && !a0PJ) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
  }
  return y;
}
async function a0fD(P = true) {
  const f = {
    "HXTAK": "--disable-gpu",
    "qOaej": "--disable-gpu-compositing",
    "eWabU": function (k, I) {
      return k(I);
    },
    "uusPN": function (k, I) {
      return k - I;
    },
    "NiWlE": function (k, I) {
      return k && I;
    },
    "DzUSA": function (k, I) {
      return k + I;
    },
    "BZWyU": function (k, I) {
      return k(I);
    },
    "Vbgyd": function (k, I) {
      return k(I);
    },
    "ahOjF": function (k, I) {
      return k(I);
    },
    "IOqYy": "eng",
    "vBdMw": function (k, I) {
      return k || I;
    },
    "uXhTE": function (k, I) {
      return k && I;
    },
    "oMTaF": function (k, I) {
      return k === I;
    },
    "ueIOF": "GMqty",
    "ovzYq": "RpZYl",
    "HdJAu": function (k, I) {
      return k !== I;
    },
    "zjkjA": "TMubJ",
    "cGbFD": "KHZUL",
    "gMLaR": "utf8",
    "AIJIg": function (k, I) {
      return k < I;
    },
    "tbHaQ": function (k, I) {
      return k !== I;
    },
    "Sqpnu": "FjvUP",
    "goYvr": function (k, I) {
      return k !== I;
    },
    "URmtC": "wFMmK",
    "ytNJi": "AMIfW",
    "uLBFn": function (k, I) {
      return k === I;
    },
    "DjCwF": "Hazno",
    "xLupQ": function (k, I) {
      return k === I;
    },
    "esfZg": "sMTDJ",
    "iMVrF": function (k, I) {
      return k && I;
    },
    "aRBVV": function (k, I) {
      return k === I;
    },
    "JlDtH": "zcthx",
    "kqyev": function (k, I) {
      return k !== I;
    },
    "lkhyr": "kMeQC",
    "YTiXV": "ALJAW",
    "ylLly": function (k, I, j) {
      return k(I, j);
    },
    "sFilp": function (k, I) {
      return k !== I;
    },
    "XjBAA": "XPPPx",
    "MWevk": "nrTCd",
    "fANAC": "eRKKu",
    "Dyqkd": function (k, I) {
      return k(I);
    },
    "NEXnY": function (k, I) {
      return k && I;
    },
    "MyMXk": "eVbLM",
    "DXzRo": function (k, I) {
      return k(I);
    },
    "txwGm": "daftu",
    "Lpygi": "rvFhI",
    "KiqTf": function (k, I) {
      return k(I);
    },
    "GRctq": function (k, I) {
      return k(I);
    },
    "xEbDe": function (k, I) {
      return k && I;
    },
    "FpvIi": function (k, I) {
      return k !== I;
    },
    "YBJch": "ooQOt",
    "Mphvp": function (k, I) {
      return k(I);
    },
    "etukv": "mpngJ",
    "qpJoQ": "xOflt",
    "PUSBR": function (k, I) {
      return k(I);
    },
    "anZYL": function (k, I) {
      return k(I);
    },
    "SGvdg": function (k, I) {
      return k === I;
    },
    "KEQVh": "GIfuL",
    "FSiBl": "YWVEZ",
    "VbTnt": function (k, I) {
      return k(I);
    },
    "ATkoK": function (k, I) {
      return k(I);
    },
    "qqBOL": function (k, I) {
      return k !== I;
    },
    "yGCNz": "VpENU",
    "PLGwX": function (k, I) {
      return k(I);
    },
    "NniuP": function (k, I) {
      return k(I);
    },
    "hJrUS": function (k, I) {
      return k >= I;
    },
    "IjWfl": function (k, I) {
      return k === I;
    },
    "jalYK": "CzXWL",
    "pDWxy": "xETQX",
    "TCucm": "MlncN",
    "sUenj": "aFhhP"
  };
  if (f.uXhTE(!a0Pf, !a0PJ)) {
    if (f.oMTaF(f.ueIOF, f.ovzYq)) {
      f = true;
    } else {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(a0PO + "  Check proxies...");
    }
  } else if (f.HdJAu(f.zjkjA, f.cGbFD)) {
    f.Vbgyd(a0fY, "Check proxies...");
  } else {
    if (!i) {
      g.stdout.moveCursor(0, -4);
      V.stdout.clearScreenDown();
      N.log(h);
    }
    C.exit(0);
  }
  let S = a0Pp;
  const E = a0T.readFileSync(a0Pl, f.gMLaR).split("\n");
  const J = E.sort((j, y) => 0.5 - Math.random());
  for (let j = 0; f.AIJIg(j, J.length); j++) {
    if (f.tbHaQ(f.Sqpnu, f.Sqpnu)) {
      return f[0].word;
    } else {
      S = J[j].trim();
      if (a0PB && !a0PB.split(",").includes(await f.eWabU(a0fQ, S))) {
        if (f.goYvr(f.URmtC, f.ytNJi)) {
          continue;
        } else {
          S = [...E, f.HXTAK, f.qOaej];
        }
      }
      if (S && !a0Px.includes(S)) {
        if (f.uLBFn("koXKV", f.DjCwF)) {
          return false;
        } else {
          try {
            if (f.xLupQ(f.esfZg, f.esfZg)) {
              if (f.iMVrF(!a0Pf, !a0PJ)) {
                if (f.aRBVV(f.JlDtH, f.JlDtH)) {
                  let g = await a0fQ(S);
                  process.stdout.clearLine(0);
                  process.stdout.cursorTo(0);
                  process.stdout.write(a0PO + "  Check Proxy: " + S + " [" + g + "]");
                } else {
                  S.stdout.moveCursor(0, -6);
                  E.stdout.clearScreenDown();
                }
              } else {
                if (f.kqyev(f.lkhyr, f.YTiXV)) {
                  let N = await f.BZWyU(a0fQ, S);
                  f.Vbgyd(a0fY, "Check Proxy: " + S + " [" + N + "]");
                } else {
                  return true;
                }
              }
              if (await f.ylLly(a0fr, S, P)) {
                if (f.sFilp(f.XjBAA, f.MWevk)) {
                  if (f.iMVrF(!a0Pf, !a0PJ)) {
                    if (f.oMTaF(f.fANAC, f.fANAC)) {
                      let L = await f.eWabU(a0fQ, S);
                      process.stdout.clearLine(0);
                      process.stdout.cursorTo(0);
                      process.stdout.write(a0PX + " Proxy: " + S + " [" + L + "] works!");
                    } else {
                      S = E;
                    }
                  } else {
                    let B = await f.Dyqkd(a0fQ, S);
                    a0fY("Proxy: " + S + " [" + B + "] works!");
                  }
                  break;
                } else {
                  S.stdout.moveCursor(0, -9);
                  E.stdout.clearScreenDown();
                }
              } else {
                a0Px.push(S);
                if (f.NEXnY(!a0Pf, !a0PJ)) {
                  if (f.HdJAu(f.MyMXk, f.MyMXk)) {
                    f.eWabU(f, "Launch Zefoy in headless browser...");
                  } else {
                    let H = await f.DXzRo(a0fQ, S);
                    process.stdout.clearLine(0);
                    process.stdout.cursorTo(0);
                    process.stdout.write(a0PD + " Proxy: " + S + " [" + H + "] failed!");
                  }
                } else {
                  if (f.xLupQ(f.txwGm, f.Lpygi)) {
                    if (E) {
                      return j;
                    } else {
                      stCqJM.eWabU(I, 0);
                    }
                  } else {
                    let s = await f.BZWyU(a0fQ, S);
                    f.KiqTf(a0fY, "Proxy: " + S + " [" + s + "] failed!");
                  }
                }
              }
              await f.GRctq(a0fF, 1000);
            } else {
              k.stdout.clearLine(0);
              j.stdout.cursorTo(0);
              I.stdout.write(j + (" Check browser (" + y.substring(0, 34) + ")..."));
            }
          } catch (a) {
            a0Px.push(S);
            if (f.xEbDe(!a0Pf, !a0PJ)) {
              if (f.FpvIi("MdxSE", f.YBJch)) {
                let n = await f.Mphvp(a0fQ, S);
                process.stdout.clearLine(0);
                process.stdout.cursorTo(0);
                process.stdout.write(a0PO + "  Proxy: " + S + " [" + n + "] failed: " + a.code);
              } else {
                return f.task;
              }
            } else {
              if (f.goYvr(f.etukv, f.qpJoQ)) {
                let K = await f.PUSBR(a0fQ, S);
                f.anZYL(a0fY, "Proxy: " + S + " [" + K + "] failed: " + a.code);
              } else {
                E = f.uusPN(J, k);
              }
            }
          }
        }
      }
    }
  }
  if (f.uXhTE(!a0Pf, !a0PJ)) {
    if (f.SGvdg(f.KEQVh, f.FSiBl)) {
      if (f.NiWlE(!I, !j)) {
        N.stdout.clearLine(1);
        h.stdout.cursorTo(0);
        L.stdout.write(f.DzUSA(p, " Chrome/Chromium executable is valid!") + " ".repeat(17));
      } else {
        f.eWabU(B, "Chrome/Chromium executable is valid!");
      }
    } else {
      let X = await f.VbTnt(a0fQ, S);
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(a0PO + "  Trying Proxy: " + S + " [" + X + "]");
      await f.ATkoK(a0fF, 1000);
    }
  } else {
    if (f.qqBOL("VpENU", f.yGCNz)) {
      f.BZWyU(k, "[" + i + "] " + I + " (+" + j + ") " + y);
    } else {
      let r = await f.PLGwX(a0fQ, S);
      f.NniuP(a0fY, "Trying Proxy: " + S + " [" + r + "]");
    }
  }
  if (f.hJrUS(a0Px.length, J.length)) {
    if (f.IjWfl(f.jalYK, "eRnSk")) {
      return f.Vbgyd(J, f.Vbgyd(k, f.ahOjF(i, I)));
    } else {
      if (f.iMVrF(!a0Pf, !a0PJ)) {
        if (f.pDWxy === "xETQX") {
          process.stdout.clearLine(0);
          process.stdout.cursorTo(0);
          process.stdout.write(a0PO + "  Continue without using proxy!");
          await f.ATkoK(a0fF, 1000);
        } else {
          const d = {
            "HVEVZ": function (O, o) {
              return f.BZWyU(O, o);
            },
            "tWhJU": f.IOqYy
          };
          return new E((O, o) => {
            i.recognize(I, d.tWhJU).then(({
              data: {
                text: m
              }
            }) => {
              f.BZWyU(O, m);
            });
          });
        }
      } else if (f.SGvdg(f.TCucm, f.sUenj)) {
        J.stdout.moveCursor(0, f.vBdMw(k, i) ? -22 : -23);
        I.stdout.clearScreenDown();
      } else {
        f.Mphvp(a0fY, "Continue without using proxy!");
      }
      return a0Pp;
    }
  }
  return S;
}
async function a0fr(S, E = true) {
  let k = ["--no-sandbox", "--window-size=900,900", "--window-position=200,0", "--user-agent=" + a0PY, "--proxy-server=" + S];
  if (a0Pi) {
    k = [...k, "--disable-gpu", "--disable-gpu-compositing"];
  }
  const i = {
    headless: E,
    args: k,
    executablePath: a0P6.browser,
    userDataDir: a0P6["browser-user"]
  };
  const I = await a0Q.launch(i);
  try {
    const W = (await I.pages())[0];
    const C = {
      timeout: 0x2710,
      waitUntil: "domcontentloaded"
    };
    await W.goto(a0f6, C);
    const g = await W.content();
    if (/Zefoy/.test(g) || /_cf_chl_opt/.test(g)) {
      return true;
    }
    return false;
  } catch (V) {
    return false;
  } finally {
    await I.close();
  }
}
async function a0fe() {
  let f = a0Pp;
  if (f) {
    if (!a0Pf && !a0PJ) {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(a0PO + "  Check proxies...");
    } else {
      a0fY("Check proxies...");
    }
    await a0fF(1000);
    if (await a0fr(f, a0PE)) {
      if (!a0Pf && !a0PJ) {
        let i = await a0fQ(f);
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write(a0PO + "  Proxy: " + f + " [" + i + "] works!");
      } else {
        let I = await a0fQ(f);
        a0fY("Proxy: " + f + " [" + I + "] works!");
      }
    } else {
      if (!a0Pf && !a0PJ) {
        let W = await a0fQ(f);
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write(a0PO + "  Proxy: " + f + " [" + W + "] failed!");
      } else {
        let C = await a0fQ(f);
        a0fY("Proxy: " + f + " [" + C + "] failed!");
      }
      f = '';
      await a0fF(1000);
      if (!a0Pf && !a0PJ) {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write(a0PO + "  Do not use proxy!");
      } else {
        a0fY("Do not use proxy!");
      }
    }
    await a0fF(1000);
  }
  if (a0Pl) {
    f = await a0fD(a0PE);
  }
  return f;
}
async function a0fb() {
  await a0fO();
  let f = await a0fk();
  return await a0fd(f);
}
async function a0fd(f) {
  let J = await f.evaluate("(() => {\n      let choices = Array.from(document.querySelectorAll(\".card-body\"));\n      choices = choices.map((c) => {\n        const parts = c.innerText.replace(" + /(\r\n|\n|\r)/gm + ", \" \").split(\"  \");\n        return {\n          name: 'Up ' + parts[0],\n          disabled:" + /soon/ + ".test(parts[1]) ? true : false,\n        };\n      });\n      return choices.filter((c) => !c.disabled);\n    })();");
  if (!J.length || J[0].name === "Up ") {
    return false;
  }
  const k = J.map(I => I.name);
  return k;
}
async function a0fO(P = true, f = true) {
  const S = {
    "YjiZS": function (J, k) {
      return J + k;
    },
    "FasOQ": function (J, k) {
      return J(k);
    },
    "LPWct": function (J) {
      return J();
    },
    "KlJpr": function (J, k) {
      return J(k);
    },
    "GuJSL": "function *\\( *\\)",
    "UqdFy": "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",
    "SzOoT": "chain",
    "xbxBI": function (J, k) {
      return J + k;
    },
    "dXiXt": function (J, k, i) {
      return J(k, i);
    },
    "WlNaX": "Executable not found in the following path:\n",
    "UDTpN": "Use the -b flag to set the path to the browser.",
    "ovflw": function (J, k) {
      return J - k;
    },
    "cIWuR": function (J, k) {
      return J && k;
    },
    "neYoq": function (J, k) {
      return J + k;
    },
    "pGZZu": function (J, k) {
      return J + k;
    },
    "GWaXw": function (J, k) {
      return J(k);
    },
    "fApjg": function (J, k) {
      return J(k);
    },
    "gccyZ": function (J, k) {
      return J !== k;
    },
    "AYbrG": "IDGko",
    "Deplz": function (J, k) {
      return J + k;
    },
    "MHDRg": function (J, k) {
      return J !== k;
    },
    "eNZxV": "DuWNW",
    "YuivX": "xJUqR",
    "uqKyp": function (J, k) {
      return J(k);
    },
    "iuCaw": function (J, k) {
      return J(k);
    },
    "oAXcq": function (J, k) {
      return J(k);
    },
    "UaSVQ": function (J, k) {
      return J === k;
    },
    "tMklp": "XwAAf",
    "cwiUc": function (J, k) {
      return J + k;
    },
    "LfqKy": "WGTFj",
    "pNoks": "VKlEj",
    "vCPxw": "HdCxj",
    "oMejB": function (J, k) {
      return J && k;
    },
    "nFEmP": function (J, k) {
      return J === k;
    },
    "pEBQq": "TWzqE",
    "mimcT": "RhYzg",
    "eMeVd": function (J, k) {
      return J + k;
    },
    "qNoYx": "TRLIe",
    "KyJUX": "EECha",
    "ecCVO": "BCmtB",
    "TazfZ": "eQCab",
    "uiSou": function (J, k) {
      return J && k;
    },
    "FWBqQ": "Czgqb",
    "TaFxB": "InjCj",
    "ZtaSc": function (J, k) {
      return J !== k;
    },
    "zmeDi": "aRWKM",
    "pHXqM": "ZnTFO",
    "HGTcu": function (J) {
      return J();
    },
    "tOBgX": function (J, k, i) {
      return J(k, i);
    },
    "KAROG": "zlIHI",
    "WtLAj": "ungnz",
    "czqCi": function (J, k) {
      return J === k;
    },
    "hbOmL": "dhpNN",
    "ylwls": "ZEcAh",
    "SSHBu": function (J, k) {
      return J === k;
    },
    "KfOeI": "RvAmM",
    "nYjBR": "nqvOw",
    "RxxNF": function (J, k) {
      return J(k);
    },
    "BXLmS": "EkCef",
    "Ttpte": "pDACN",
    "HaopW": function (J, k) {
      return J === k;
    },
    "CCRfF": "mHKMF",
    "cUQvP": "VTkcY",
    "kOBxD": "WhLnx",
    "rLyGV": function (J, k) {
      return J(k);
    },
    "oziZh": function (J, k) {
      return J !== k;
    },
    "zIlee": "fmpcZ",
    "TxhCi": "cAqoS",
    "RTfZm": "Wtexn",
    "RnUAA": "rlnLX",
    "PQOLk": function (J, k) {
      return J && k;
    },
    "juPDf": function (J, k) {
      return J === k;
    },
    "CxDIl": "nyiku",
    "gUFYI": "hLOuj",
    "LEMJF": function (J, k) {
      return J(k);
    },
    "zNQCk": function (J, k) {
      return J(k);
    }
  };
  const E = a0P6.browser || a0Q.executablePath();
  if (!a0Pf && !a0PJ) {
    if (S.gccyZ(S.AYbrG, S.AYbrG)) {
      J.stdout.clearLine(0);
      k.stdout.cursorTo(0);
      i.stdout.write(S.YjiZS(I, " Cookies invalid/expired!"));
    } else {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(S.Deplz(a0Pu, " Check browser (" + E.substring(0, 34) + ")..."));
    }
  } else if (S.MHDRg(S.eNZxV, S.YuivX)) {
    S.uqKyp(a0fY, "Check browser (" + E + ")...");
  } else {
    S = E;
  }
  await S.iuCaw(a0fF, 1000);
  if (await S.oAXcq(a0S4, E)) {
    if (!a0Pf && !a0PJ) {
      if (S.UaSVQ(S.tMklp, "XwAAf")) {
        process.stdout.clearLine(1);
        process.stdout.cursorTo(0);
        process.stdout.write(S.pGZZu(S.cwiUc(a0PX, " Chrome/Chromium executable is valid!"), " ".repeat(17)));
      } else {
        S.FasOQ(g, "[" + V + "] " + N + " (+" + h + ") [" + L + "] Stopped for reaching the maximum time limit! (in " + S.LPWct(p) + " mins)");
        if (!B) {
          A.stdout.clearLine(0);
          a.stdout.cursorTo(0);
          n.stdout.write(U + " Stopped for reaching the maximum time limit!");
        }
        s.exit(0);
      }
    } else if (S.UaSVQ(S.LfqKy, S.LfqKy)) {
      S.uqKyp(a0fY, "Chrome/Chromium executable is valid!");
    } else {
      S.stdout.clearLine(0);
      E.stdout.cursorTo(0);
    }
  } else {
    if (S.MHDRg(S.pNoks, S.vCPxw)) {
      if (S.oMejB(!a0Pf, !a0PJ)) {
        if (S.nFEmP(S.pEBQq, S.mimcT)) {
          S.KlJpr(S, "SESSID: " + E);
        } else {
          process.stdout.clearLine(0);
          process.stdout.cursorTo(0);
          process.stdout.write(S.eMeVd(S.pGZZu(a0PD, " Chrome/Chromium executable is invalid!"), " ".repeat(15)));
          console.info("\n\n", S.WlNaX, "\"" + E + "\"\n", S.UDTpN);
        }
      } else {
        if (S.gccyZ(S.qNoYx, S.qNoYx)) {
          return false;
        } else {
          a0fY("Chrome/Chromium executable is invalid!");
        }
      }
      process.exit(1);
    } else {
      S.FasOQ(f, "Continue without using proxy!");
    }
  }
  await S.KlJpr(a0fF, 1000);
  if (a0T.existsSync(a0f7)) {
    if (S.gccyZ(S.KyJUX, S.KyJUX)) {
      J.stdout.clearLine(1);
      k.stdout.cursorTo(0);
      i.stdout.write(S.YjiZS(S.YjiZS(I, " Chrome/Chromium executable is valid!"), " ".repeat(17)));
    } else {
      P = false;
    }
  }
  if (P) {
    if (S.gccyZ(S.ecCVO, S.TazfZ)) {
      if (S.uiSou(!a0Pf, !a0PJ)) {
        if (S.nFEmP(S.FWBqQ, S.TaFxB)) {
          const V = {
            "UwpJz": xZVQXi.GuJSL,
            "SJVMm": xZVQXi.UqdFy,
            "ULkvh": function (N, h) {
              return xZVQXi.FasOQ(N, h);
            },
            "DLnOZ": "init",
            "NMuAl": function (N, h) {
              return xZVQXi.YjiZS(N, h);
            },
            "bJUGS": xZVQXi.SzOoT,
            "nqFAc": function (N, h) {
              return xZVQXi.xbxBI(N, h);
            },
            "QxXnx": function (N) {
              return xZVQXi.LPWct(N);
            }
          };
          xZVQXi.dXiXt(k, this, function () {
            const B = new W(V.UwpJz);
            const G = new C(V.SJVMm, "i");
            const R = xZVQXi.FasOQ(g, "init");
            if (!B.test(xZVQXi.YjiZS(R, V.bJUGS)) || !G.test(xZVQXi.xbxBI(R, "input"))) {
              xZVQXi.FasOQ(R, "0");
            } else {
              xZVQXi.LPWct(N);
            }
          })();
        } else {
          process.stdout.clearLine(0);
          process.stdout.cursorTo(0);
          process.stdout.write(a0Pu + " Check Zefoy accessibility...");
        }
      } else {
        if (S.ZtaSc(S.zmeDi, S.pHXqM)) {
          S.uqKyp(a0fY, "Check Zefoy accessibility...");
        } else {
          return false;
        }
      }
      a0Pt = a0Pt || (await S.HGTcu(a0fe));
      if (await S.tOBgX(a0fr, a0Pt, f)) {
        if (S.MHDRg(S.KAROG, S.WtLAj)) {
          if (S.oMejB(!a0Pf, !a0PJ)) {
            if (S.czqCi(S.hbOmL, S.ylwls)) {
              S.stdout.moveCursor(0, -3);
              E.stdout.clearScreenDown();
            } else {
              process.stdout.clearLine(0);
              process.stdout.cursorTo(0);
              process.stdout.write(a0PX + " Zefoy is accessible! :)");
            }
          } else if (S.SSHBu(S.KfOeI, S.nYjBR)) {
            f.exit(0);
          } else {
            S.RxxNF(a0fY, "Zefoy is accessible! :)");
          }
          if (await S.dXiXt(a0fo, a0Pt, f)) {
            if (S.MHDRg(S.BXLmS, S.Ttpte)) {
              if (S.cIWuR(!a0Pf, !a0PJ)) {
                if (S.HaopW(S.CCRfF, S.CCRfF)) {
                  process.stdout.clearLine(0);
                  process.stdout.cursorTo(0);
                  process.stdout.write(a0PD + " Zefoy is protected by UAM Cloudflare!");
                } else {
                  J.stdout.clearLine(0);
                  k.stdout.cursorTo(0);
                  i.stdout.write(I + " Stopped for not accumulating the defined minimum!");
                }
              } else if (S.MHDRg(S.cUQvP, S.kOBxD)) {
                S.uqKyp(a0fY, "Zefoy is protected by UAM Cloudflare!");
              } else {
                i.stdout.clearLine(0);
                I.stdout.cursorTo(0);
                j.stdout.write(S.YjiZS(y, " Chrome/Chromium executable is invalid!") + " ".repeat(15));
                W.info("\n\n", S.WlNaX, "\"" + C + "\"\n", S.UDTpN);
              }
              await S.rLyGV(a0fF, 1000);
              if (S.uiSou(!a0Pf, !a0PJ)) {
                if (S.oziZh("yoPSx", S.zIlee)) {
                  process.stdout.clearLine(0);
                  process.stdout.cursorTo(0);
                  process.stdout.write(a0Pd + " Bypassing Cloudflare...");
                } else {
                  return [];
                }
              } else if (S.MHDRg(S.TxhCi, S.RTfZm)) {
                S.KlJpr(a0fY, "Bypassing Cloudflare...");
              } else {
                E = S.ovflw(J, k);
              }
              await S.iuCaw(a0fT, a0Pt);
            } else {
              if (S.cIWuR(!W, !C)) {
                R.stdout.clearLine(0);
                H.stdout.cursorTo(0);
                w.stdout.write(S.neYoq(S.pGZZu(s, " Chrome/Chromium executable is invalid!"), " ".repeat(15)));
                A.info("\n\n", S.WlNaX, "\"" + a + "\"\n", S.UDTpN);
              } else {
                S.KlJpr(n, "Chrome/Chromium executable is invalid!");
              }
              G.exit(1);
            }
          }
        } else {
          S.GWaXw(S, E);
        }
      } else if (S.SSHBu(S.RnUAA, S.RnUAA)) {
        if (S.PQOLk(!a0Pf, !a0PJ)) {
          if (S.juPDf(S.CxDIl, S.CxDIl)) {
            process.stdout.clearLine(0);
            process.stdout.cursorTo(0);
            process.stdout.write(a0PD + " Zefoy is unreachable or blocked! :(");
          } else {
            f = true;
          }
        } else if (S.ZtaSc(S.gUFYI, S.gUFYI)) {
          S.stdout.clearLine(0);
          E.stdout.cursorTo(0);
        } else {
          S.LEMJF(a0fY, "Zefoy is unreachable or blocked! (you need proxy/vpn)");
        }
      } else {
        S.fApjg(S, "Cookies injected! (" + E + ")");
      }
      await S.zNQCk(a0fF, 1000);
    } else {
      return false;
    }
  }
}
async function a0fo(S, E = true) {
  let k = ["--no-sandbox", "--window-size=900,900", "--window-position=200,0", "--user-agent=" + a0PY, "--proxy-server=" + S];
  if (a0Pi) {
    k = [...k, "--disable-gpu", "--disable-gpu-compositing"];
  }
  const i = {
    headless: E,
    args: k,
    executablePath: a0P6.browser,
    userDataDir: a0P6["browser-user"]
  };
  const I = await a0Q.launch(i);
  try {
    const y = (await I.pages())[0];
    const W = {
      timeout: 0x2710,
      waitUntil: "domcontentloaded"
    };
    await y.goto(a0f6, W);
    const C = await y.content();
    if (/_cf_chl_opt/.test(C)) {
      return true;
    }
    return false;
  } catch (N) {
    return false;
  } finally {
    await I.close();
  }
}
async function a0fZ(S) {
  let J = false;
  while (!J) {
    const i = {
      depth: -1
    };
    const I = await S.getDocument(i);
    const j = {
      nodeId: I.root.nodeId
    };
    const y = await S.getOuterHTML(j);
    const W = y.outerHTML;
    if (/Zefoy/.test(W)) {
      J = true;
    } else {
      await new Promise(V => setTimeout(V, 1000));
    }
  }
  return true;
}
function a0fm(P) {
  return JSON.stringify(P.cookies.map(f => ({
    "domain": f.domain,
    "expirationDate": f.expires,
    "hostOnly": f.hostOnly,
    "httpOnly": f.httpOnly,
    "name": f.name,
    "path": f.path,
    "sameSite": "unspecified",
    "secure": f.secure,
    "session": f.session,
    "storeId": "0",
    "value": f.value
  })));
}
async function a0fT(J) {
  const k = {
    "hnxAY": "Error processing image:",
    "cophm": function (W, C) {
      return W(C);
    },
    "wSMfo": function (W, C) {
      return W === C;
    },
    "kzDVe": "dcJyF",
    "wQebj": function (W, C) {
      return W + C;
    },
    "aHrTz": "--proxy-server=",
    "TEThp": function (W, C) {
      return W + C;
    },
    "yeTik": "--user-agent=",
    "tNddS": function (W, C) {
      return W !== C;
    },
    "BMdHe": "ZWSvx",
    "bvfyk": "orvOk",
    "aCxQq": function (W, C) {
      return W(C);
    },
    "yVxYN": function (W, C) {
      return W(C);
    },
    "oIswe": "ilNXZ",
    "TNdYR": "ciiPA"
  };
  if (a0Pj) {
    if (k.wSMfo("PesAw", k.kzDVe)) {
      [J, k] = i.get(I);
    } else {
      console.log("\n\nCurrently in Termux you need to bypass Cloudflare manually to get a valid cookies.json file. \nTo do this follow the instructions below:\n\n1. Open Playstore and install \"Kiwi Browser\".\n2. Open Kiwi Browser, enter to zefoy.com, pass Cloudflare's protection, solve the captcha.\n3. Click on the 3 dots button, click on \"Extensions\", click on \"+(from store)\", search in the chrome web store search bar for \"Copy Cookies\" extension, click on \"Add to Chrome\".\n4. In the zefoy tab, click on the 3 dots button, scroll down to the bottom, click on \"Copy Cookies\". You will see on the screen \"Copied\".\n5. $ nano cookies.json\n6. Click on the screen, and click on \"Paste\".\n7. Click CTRL, then O, then ENTER.\n8. Click CTRL, then click X.\n9. $ node bottok.js\n");
      process.exit(0);
    }
  }
  let i = a0P6.browser || a0q.path;
  let I = J ? [k.wQebj(k.aHrTz, J), k.TEThp(k.yeTik, a0PY)] : [];
  const j = {
    chromePath: i,
    chromeFlags: I
  };
  const y = await a0Y.launch(j);
  while (true) {
    if (k.tNddS(k.BMdHe, k.BMdHe)) {
      return null;
    } else {
      try {
        if (k.tNddS(k.bvfyk, k.bvfyk)) {
          S.error(k.hnxAY, E);
        } else {
          const V = {
            port: y.port
          };
          const N = await k.aCxQq(a0x, V);
          const {
            Network: h,
            Page: L,
            Runtime: p,
            DOM: B
          } = N;
          await p.enable();
          await h.enable();
          await L.enable();
          const G = {
            enabled: true
          };
          await L.setLifecycleEventsEnabled(G);
          const R = {
            url: a0f6
          };
          await L.navigate(R);
          await k.yVxYN(a0fZ, B);
          await k.yVxYN(a0fF, 1000);
          const H = await h.getCookies();
          const w = k.aCxQq(a0fm, H);
          await k.cophm(a0fs, w);
          await N.close();
          y.kill();
          break;
        }
      } catch (s) {
        if (k.oIswe !== k.TNdYR) {
          await k.yVxYN(a0fF, 1000);
        } else {
          k.cophm(S, "UA: " + E);
        }
      }
    }
  }
}
async function a0fc(S = true) {
  if (a0T.existsSync(a0f7)) {
    const j = await a0fa();
    const y = j.find(C => C.name === "user_agent");
    a0PY = decodeURIComponent(y.value);
    const W = j.find(C => C.name === "bt_proxy");
    a0Pt = W?.["value"] || a0Pt;
  } else {
    console.log("Cloudflare Expired / Zefoy Expired");
    return false;
  }
  let J = a0Pt;
  let k = ["--no-sandbox", "--window-size=900,900", "--window-position=200,0", "--user-agent=" + a0PY, "--proxy-server=" + J];
  if (a0Pi) {
    k = [...k, "--disable-gpu", "--disable-gpu-compositing"];
  }
  const i = {
    headless: S,
    args: k,
    executablePath: a0P6.browser,
    userDataDir: a0P6["browser-user"]
  };
  const I = await a0Q.launch(i);
  try {
    const N = (await I.pages())[0];
    const h = await a0fa();
    await a0fF(1000);
    await N.setCookie(...h);
    const L = {
      timeout: 0x0
    };
    await N.goto(a0f6, L);
    const p = await N.content();
    if (/Zefoy/.test(p)) {
      if (/submit-captcha/.test(p)) {
        console.log("Cloudflare Valid / Zefoy Expired");
      } else {
        console.log("Cloudflare Valid / Zefoy Valid");
      }
      return true;
    }
    console.log("Cloudflare Expired / Zefoy Expired");
    return false;
  } catch (H) {
    console.log(H);
    return false;
  } finally {
    await I.close();
  }
}
async function a0fQ(P) {
  P = await a0fM(P);
  const S = a0c("https://api.country.is/" + P);
  const E = S.json().country;
  return E;
}
async function a0fz() {
  const f = a0c("https://ipinfo.io/ip");
  const S = f.text();
  return S;
}
async function a0fM(P) {
  if (!P) {
    return await a0fz();
  }
  const E = P.match(/^(?:(.*?:.*?@)?([\d.]+)(?::(\d+))?)?$/);
  const [, J, k] = E || [];
  const i = J ? k.replace(J + "@", '') : k;
  return i;
}
async function a0fF(P) {
  return new Promise(f => setTimeout(f, P));
}
function a0fY(f) {
  const J = new Date().toLocaleString();
  const k = "[" + J + "] [" + a0PY?.["substring"](0, 26) + "...] [" + a0PF + "] " + f;
  if (a0P9) {
    a0T.appendFileSync("activity.log", k + "\n", "utf8");
  }
  if (a0Pf) {
    console.log(k);
  }
}
function a0fq() {
  return ((process.hrtime()[0] * 1000000000 + process.hrtime()[1] - (a0PZ[0] * 1000000000 + a0PZ[1])) / 60000000000).toFixed(2);
}
function a0fx() {
  const f = ((process.hrtime()[0] * 1000000000 + process.hrtime()[1] - (a0PZ[0] * 1000000000 + a0PZ[1])) / 60000000000).toFixed(2) / 60;
  const S = a0Pz / f;
  return Math.round(S);
}
function a0ft(P) {
  return P.map(S => {
    let k = '';
    for (let I = 0; I < S.length; I += 2) {
      k += S[I];
    }
    return k.split('').reverse().join('');
  });
}
function a0S0(P) {
  try {
    const S = a0c(P);
    const E = S.text();
    const J = E.match(/"liveRoomStats":\s*{\s*"userCount":\s*(\d+)/);
    if (J) {
      const i = parseInt(J[1]);
      return i;
    }
  } catch (j) {
    return null;
  }
}
async function a0S1(P) {
  const S = a0c(P);
  if (!S.ok) {
    return null;
  }
  const E = S.text();
  const J = E.match(/"stats":\s*{\s*"diggCount":(\d+),\s*"shareCount":(\d+),\s*"commentCount":(\d+),\s*"playCount":(\d+),\s*"collectCount":"(\d+)"\s*}/);
  if (J) {
    const [, I, j, y, W, C] = J;
    return {
      "diggCount": parseInt(I),
      "shareCount": parseInt(j),
      "commentCount": parseInt(y),
      "playCount": parseInt(W),
      "collectCount": parseInt(C)
    };
  } else {
    return null;
  }
}
async function a0S2(P) {
  const S = a0c(P);
  if (!S.ok) {
    return null;
  }
  const E = S.text();
  const J = E.match(/"stats":\s*{\s*"followerCount":(\d+),\s*"followingCount":(\d+),\s*"heart":(\d+),\s*"heartCount":(\d+),\s*"videoCount":(\d+),\s*"diggCount":(\d+),\s*"friendCount":(\d+)\s*}/);
  if (J) {
    const [, i, I, j, y, W, C, g] = J;
    return {
      "followerCount": parseInt(i),
      "followingCount": parseInt(I),
      "heart": parseInt(j),
      "heartCount": parseInt(y),
      "videoCount": parseInt(W),
      "diggCount": parseInt(C),
      "friendCount": parseInt(g)
    };
  } else {
    return null;
  }
}
async function a0S3(P) {
  try {
    const S = a0c("https://api.datamuse.com/sug?s=" + P);
    const E = S.json();
    if (E.length > 0) {
      return E[0].word;
    } else {
      return P;
    }
  } catch (I) {
    a0fY(I);
    return P;
  }
}
async function a0S4(P) {
  const S = promisify(a0T.access);
  try {
    await S(P, a0T.constants.X_OK);
    return true;
  } catch {
    return false;
  }
}
async function a0S5(P = true) {
  a0f6 = "https://homedecoratione.com/";
  a0P6.provider = "Freer";
  a0f7 = a0P6.cookies === "cookies.json" ? "cookies2.json" : a0P6.cookies;
  let S = await a0S6();
  let E = await a0Sf(S);
  if (!E) {
    await a0S5(false);
    return;
  }
  const J = await a0fN();
  await a0SS(E, J, S);
}
async function a0S6(S = null) {
  try {
    if (!a0T.existsSync(a0f7)) {
      if (!a0Pq) {
        a0Pq = await a0fX(a0PE);
      }
      S = (await a0Pq.pages())[0];
      const k = {
        timeout: 0x0
      };
      await S.goto(a0f6, k);
      await a0fF(3000);
      if (a0P6["terminal-captcha"] === '') {
        await a0S8(S);
      } else {
        await a0S9(S);
      }
    }
    if (!S) {
      if (a0Pq) {
        S = (await a0Pq.pages())[0];
      } else {
        a0Pq = await a0fX(a0PE);
        S = (await a0Pq.pages())[0];
      }
      const y = {
        timeout: 0x0
      };
      await S.goto(a0f6, y);
    }
    return await a0S7(S);
  } catch (N) {
    await a0fA();
    await a0fF(1000);
    return await a0S6();
  }
}
async function a0S7(f) {
  if (!a0Pf && !a0PJ) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(a0Pu + " Launch " + a0P6.provider + " in headless browser...");
  } else {
    a0fY("Launch " + a0P6.provider + " in headless browser...");
  }
  await a0fF(1000);
  const E = await a0fa();
  const J = E.find(I => I.name === "PHPSESSID");
  a0PF = J ? J.value : '';
  if (!a0Pf && !a0PJ) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(a0Pu + " SESSID: " + a0PF);
  } else {
    a0fY("SESSID: " + a0PF);
  }
  await a0fF(1000);
  await f.setCookie(...E);
  const k = {
    timeout: 0x0
  };
  await f.goto(a0f6, k);
  if (!a0Pf && !a0PJ) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(a0Pv + " Cookies injected! (" + a0f7 + ")");
  } else {
    a0fY("Cookies injected! (" + a0f7 + ")");
  }
  a0fY("Load session (SESSID: " + a0PF + ")...");
  await a0fF(3000);
  const i = await f.content();
  if (/CAPTCHA code/.test(i)) {
    if (a0P6["terminal-captcha"] === '') {
      await a0S8(f);
    } else {
      await a0S9(f);
    }
  }
  return f;
}
async function a0S8(J) {
  if (!a0Pf) {
    process.stdout.cursorTo(0);
    process.stdout.write(a0Pr + " Solve the captcha manually...");
  } else {
    a0fY("Solve the captcha manually...");
  }
  await J.evaluate("(() => {\n      const button = document.querySelector(\"button.fc-button.fc-cta-consent.fc-primary-button\");\n      if (button) {\n        button.click();\n      }\n    })();");
  await a0fF(1000);
  const i = await J.evaluate("(() => {\n      const img = document.querySelector('img.card-img-top');\n      if (img) {\n        const rect = img.getBoundingClientRect();\n        return {\n          top: rect.top,\n          left: rect.left,\n          width: img.width,\n          height: img.height\n        };\n      }\n    })();");
  const I = {
    x: i.left,
    y: i.top,
    width: i.width,
    height: i.height
  };
  const j = {
    path: "captcha.png",
    clip: I
  };
  await J.screenshot(j);
  await a0fF(200);
  await a0SP("captcha.png");
  if (!a0Pf) {
    console.log("\n");
    const V = {
      width: 0x40
    };
    console.log(await a0M.file("captcha.png", V));
  }
  const y = {
    type: "input",
    name: "captcha",
    message: "Write a Captcha:"
  };
  const W = await a0m.prompt([y]);
  const C = W.captcha;
  await a0T.promises.unlink("captcha.png");
  await J.waitForSelector("input[type=text]");
  await J.$eval("input[type=text]", (N, h) => N.value = h, C);
  await J.evaluate("(() => {\n      document\n        .querySelector(\"button.btn.btn-dark.btn-lg.btn-block\")\n        .click();\n    })();");
  if (!a0Pf) {
    process.stdout.moveCursor(0, a0PI || a0Pj ? -22 : -23);
    process.stdout.clearScreenDown();
  }
  await a0fF(1000);
  const g = await J.evaluate("(() => {\n      return document.querySelector(\"button.btn.btn-primary\") ? 1 : 0;\n    })();");
  if (g) {
    if (!a0Pf) {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(a0PX + " Captcha resolved! (" + C + ")");
    } else {
      a0fY("Captcha resolved! (" + C + ")");
    }
    const N = await J.cookies();
    await a0fw(N);
    await a0fF(2000);
  } else {
    if (!a0Pf) {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(a0PD + " Wrong captcha! (" + C + ")");
    } else {
      a0fY("Wrong captcha! (" + C + ")");
    }
    await a0fF(2000);
    await a0S8(J);
  }
}
async function a0S9(f) {
  const E = Math.random().toString(36).substring(2, 10) + "-";
  if (!a0Pf && !a0PJ) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(a0Pd + " Solve captcha automatically...");
  } else {
    a0fY("Solve captcha automatically...");
  }
  await f.evaluate("(() => {\n      const button = document.querySelector(\"button.fc-button.fc-cta-consent.fc-primary-button\");\n      if (button) {\n        button.click();\n      }\n    })();");
  await a0fF(1000);
  const J = await f.evaluate("(() => {\n      const img = document.querySelector('img.card-img-top');\n      if (img) {\n        const rect = img.getBoundingClientRect();\n        return {\n          top: rect.top,\n          left: rect.left,\n          width: img.width,\n          height: img.height\n        };\n      }\n    })();");
  const k = {
    x: J.left,
    y: J.top,
    width: J.width,
    height: J.height
  };
  await f.screenshot({
    "path": E + "captcha.png",
    "clip": k
  });
  await a0fF(200);
  await a0SP(E + "captcha.png");
  const i = await a0S3((await a0fy(E + "captcha.png")).replace(/(\r\n|\n|\r| )/gm, ''));
  await a0T.promises.unlink(E + "captcha.png");
  await f.waitForSelector("input[type=text]");
  await f.$eval("input[type=text]", (j, y) => j.value = y, i);
  await f.evaluate("(() => {\n      document\n        .querySelector(\"button.btn.btn-dark.btn-lg.btn-block\")\n        .click();\n    })();");
  await a0fF(1000);
  const I = await f.evaluate("(() => {\n      return document.querySelector(\"button.btn.btn-primary\") ? 1 : 0;\n    })();");
  if (I) {
    if (!a0Pf && !a0PJ) {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(a0PX + " Captcha resolved! (" + i + ")");
    } else {
      a0fY("Captcha resolved! (" + i + ")");
    }
    const j = await f.cookies();
    await a0fw(j);
    await a0fF(2000);
  } else {
    if (!a0Pf && !a0PJ) {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(a0PD + " Wrong captcha! (" + i + ")");
    } else {
      a0fY("Wrong captcha! (" + i + ")");
    }
    await a0fF(2000);
    await a0S9(f);
  }
}
async function a0SP(f) {
  try {
    const i = await a0t.read(f);
    i.scan(0, 0, i.bitmap.width, i.bitmap.height, function (I, j, W) {
      const C = a0t.intToRGBA(i.getPixelColor(I, j));
      const g = Math.abs(C.r - C.g) + Math.abs(C.g - C.b) + Math.abs(C.r - C.b);
      if (g > 20) {
        i.setPixelColor(4294967295, I, j);
      }
    });
    await i.writeAsync(f);
  } catch (I) {
    console.error("Error processing image:", I);
  }
}
async function a0Sf(S) {
  await S.waitForSelector(".card-body.p-1 > small");
  let J = await S.evaluate("(() => {\n      let choices = Array.from(document.querySelectorAll(\".card-body.p-1 > small\"));\n      choices = choices.map((c) => {\n        const parts = c.innerText.replace(" + /(\r\n|\n|\r|:)/gm + ", \" \").split(\"  \");\n        return {\n          name: 'Up ' + parts[0].replace(\"views\", \"Views\").replace(\"hearts\", \"Hearts\").replace(\"Comment\", \"Comments\"),\n          disabled:" + /soon/ + ".test(parts[1]) ? true : false,\n        };\n      });\n      return choices.filter((c) => !c.disabled);\n    })();");
  if (J[0].name === "Up ") {
    return false;
  }
  const k = {
    name: "Back"
  };
  J.push(k);
  if (!a0Pf) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
  }
  if (a0P6.task) {
    return a0P6.task;
  } else {
    const i = {
      type: "list",
      name: "mode",
      message: "What task do you want me to do?",
      choices: J
    };
    const I = await a0m.prompt([i]);
    if ((await I.mode) === "Back") {
      if (!a0Pf) {
        process.stdout.moveCursor(0, -2);
        process.stdout.clearScreenDown();
      }
      await a0f9();
    }
    return I.mode;
  }
}
async function a0SS(f, S, E, J = false) {
  try {
    a0PZ = a0PZ || process.hrtime();
    await E.evaluate("(() => {\n        var modeBtn = document.querySelector('button.btn.btn-primary');\n        if (modeBtn) {\n          modeBtn.click();\n        }\n      })();");
    let i = await E.evaluate("(() => {\n        var infoElement = document.querySelector('.modal.show')\n        if (infoElement) {\n          return infoElement.innerText;\n        }\n        return \"\";\n      })();");
    if (i != '') {
      await E.waitForSelector("input.form-control.form-control-lg");
      await E.$eval("input.form-control.form-control-lg", (y, W) => y.value = W, S);
      await E.evaluate("(() => {\n          document\n            .querySelector(\"button.btn.btn-outline-secondary\")\n            .click();\n        })();");
    }
    const I = new Map([["Up Hearts", "button[data-type=\"hearts\"]"], ["Up Comments Hearts", "button[data-type=\"com_op\"]"], ["Up Views", "button[data-type=\"views\"]"], ["Up Shares", "button[data-type=\"shares\"]"], ["Up Favorites", "button[data-type=\"favorites\"]"], ["Up Live Views", "button[data-type=\"views\"]"]]);
    let j = "button[data-type=\"views\"]";
    if (I.has(f)) {
      j = I.get(f);
    }
    if (!J && !a0Pf) {
      console.log("\n\n");
    }
    a0fY(f + " task running...");
    a0Pm = await a0SJ(E, j, f, S);
    a0PT = await a0Sk(E, j, f, S);
  } catch (y) {
    a0fY(y);
    await a0fA();
    await a0fF(2000);
    E = await a0S6(E);
    const g = {
      timeout: 0x0
    };
    await E.goto(a0f6, g);
    a0SS(f, S, E, true);
    return;
  }
}
async function a0SE(P, f, S, E) {
  return setInterval(async () => {
    let k = await P.evaluate("(() => {\n        return document.querySelector(\"" + f + " > div > div\").innerText;\n      })();");
    k = k.replace(/(\r\n|\n|\r)/gm, " ");
    if (/limit/.test(k) || /error/.test(k) || /not working/.test(k) || /valid video/.test(k) || /again later/.test(k) || /error/.test(k) || /expired/.test(k) || /many requests/.test(k) || /found/.test(k)) {
      clearInterval(a0Pm);
      clearInterval(a0PT);
      clearInterval(a0Pc);
      let i = await a0fQ(a0Pt);
      let I = '';
      if (a0Pz > 0) {
        I = "[32m+" + a0Pz + "[0m";
      } else {
        I = '';
      }
      if (/expired/.test(k)) {
        await a0fA();
        await a0fF(2000);
      }
      if (/many requests/.test(k) || /again later/.test(k) || /not working/.test(k) || /valid video/.test(k)) {
        if (!a0Pf) {
          process.stdout.moveCursor(0, -3);
          process.stdout.clearScreenDown();
          process.stdout.write("\n" + a0PA + "[33m " + S + " [34m[" + i + "][0m " + I + "  [90m(" + a0fx() + " /hr " + (((process.hrtime()[0] * 1000000000 + process.hrtime()[1] - (a0PZ[0] * 1000000000 + a0PZ[1])) / 60000000000).toFixed(2) / 60).toFixed(2) + " hrs)[0m\n\n");
          process.stdout.write(a0PU + " Waiting: " + a0Po + " mins (ERROR: " + k.substring(0, 24) + ")...");
        }
        a0fY("Waiting " + a0Po + " mins (ERROR: " + k + ")...");
        await a0fF(a0Po * 60 * 1000);
      }
      if (!a0Pf) {
        process.stdout.moveCursor(0, -3);
        process.stdout.clearScreenDown();
        process.stdout.write("\n" + a0PA + "[33m " + S + " [34m[" + i + "][0m " + I + "  [90m(" + a0fx() + " /hr " + (((process.hrtime()[0] * 1000000000 + process.hrtime()[1] - (a0PZ[0] * 1000000000 + a0PZ[1])) / 60000000000).toFixed(2) / 60).toFixed(2) + " hrs)[0m\n\n");
        process.stdout.write(a0Pa + " Running: Trying again (ERROR: " + k.substring(0, 24) + ")...");
      }
      a0fY("Trying again (ERROR: " + k + ")...");
      P = await a0S6(P);
      const j = {
        timeout: 0x0
      };
      await P.goto(a0f6, j);
      a0fB(S, E, P, true);
      return;
    }
  }, 20000);
}
async function a0SJ(P, f, S, E, J = null) {
  let i = 0;
  let I = '';
  let j = false;
  let y = 0;
  let W = await a0fQ(a0Pt);
  return setInterval(async () => {
    let C = '';
    try {
      C = await P.evaluate("(() => {\n          var infoElement = document.querySelector('.modal.show');\n          if (infoElement) {\n            return infoElement.innerText;\n          }\n          return \"\";\n        })();");
    } catch (L) {}
    let g = '';
    if (S !== "Up Comments Hearts") {
      g = await P.evaluate("(() => {\n          var pointsElement = document.querySelector('" + f + "');\n          if (pointsElement) {\n            return pointsElement.getAttribute('title');\n          }\n          return \"\";\n        })();");
    }
    g = g ? parseInt(g).toLocaleString("en-US") : '';
    let V = await P.evaluate("(() => {\n        var minElement = document.getElementById('min');\n        var secElement = document.getElementById('sec');\n        if (minElement && secElement) {\n          var minutes = minElement.textContent;\n          var seconds = secElement.textContent;\n          return \" Please wait \" + minutes + \" minute(s) \" + seconds + \" seconds\";\n        }\n        return \"\";\n      })();");
    let N = C ? C : V ? V : g;
    if (S === "Up Comments Hearts" && !V && !C && a0f4 && a0f5) {
      N = a0f5.concat;
    }
    if (a0f3.length > 0 && a0f4 && J === null) {
      if (!a0Pf) {
        process.stdout.moveCursor(0, -3);
        process.stdout.cursorTo(0);
        process.stdout.clearScreenDown();
      }
      clearInterval(a0Pm);
      clearInterval(a0PT);
      J = await a0fl(a0f3);
      a0f5 = a0f3[J];
      a0Pm = await a0SJ(P, f, S, E, J);
      a0PT = await a0Sk(P, f, S, E, J);
      console.log("\n\n");
    }
    if (a0f3.length > 0 && !a0f4) {
      N = "Extracting comments (" + a0f3.length + ")...";
    }
    N = N.replace(/(\r\n|\n|\r)/gm, " ");
    let h = a0Pa;
    h = /error/.test(N) ? a0Pn : h;
    h = /wait/.test(N) ? j ? a0PU : a0PK : h;
    if (J !== null && a0f3.length) {
      i = a0f5.likes;
      if (a0PQ === 0) {
        if (a0PM === 0) {
          a0PQ = i;
        } else {
          a0PQ = i - a0PM;
        }
      }
      a0Pz = Math.abs(i - a0PQ);
      if (a0Pz !== y) {
        a0fY("[" + S + "] " + i + " (+" + a0Pz + ") " + E);
      }
      y = a0Pz;
    } else {
      if (a0PQ === 0 && a0PM === 0 && S !== "Up Comments Hearts" && S !== "Up Live Views") {
        if (S === "Up Hearts") {
          a0PQ = (await a0S1(E))?.["diggCount"] || 0;
        }
        if (S === "Up Views") {
          a0PQ = (await a0S1(E))?.["playCount"] || 0;
        }
        if (S === "Up Shares") {
          a0PQ = (await a0S1(E))?.["shareCount"] || 0;
        }
        if (S === "Up Favorites") {
          a0PQ = (await a0S1(E))?.["collectCount"] || 0;
        }
      }
      const H = N.replace(" ", '').match(/\d+(,\d+)*(?![^,])/g);
      if (H && S !== "Up Comments Hearts" && S !== "Up Live Views") {
        i = parseInt(H[0].replace(/[,\.]/g, ''));
        if (a0PQ === 0) {
          if (a0PM === 0) {
            a0PQ = i;
          } else {
            a0PQ = i - a0PM;
          }
        }
        a0Pz = Math.abs(i - a0PQ);
        if (a0Pz !== y) {
          a0fY("[" + S + "] " + i + " (+" + a0Pz + ") " + E);
        }
        y = a0Pz;
      }
    }
    if (a0Pz > 0) {
      I = "[32m+" + a0Pz + "[0m";
    } else {
      I = '';
    }
    if (S === "Up Live Views") {
      if (a0f0 > a0f2) {
        const A = a0f0 - a0f2;
        a0f1 += A;
      }
      a0f2 = a0f0;
      i = a0f1;
      if (a0PQ === 0) {
        if (a0PM === 0) {
          a0PQ = i;
        } else {
          a0PQ = i - a0PM;
        }
      }
      a0Pz = Math.abs(i - a0PQ);
      if (a0Pz !== y) {
        a0fY("[" + S + "] " + i + " (+" + a0Pz + ") " + E);
      }
      y = a0Pz;
      I = "[32m● " + a0f0 + " +" + a0Pz + "[0m";
    }
    if (!a0f8.includes(await a0fu()) && a0Pz > Math.sqrt(25000000)) {
      h = a0Pn;
      clearInterval(a0Pm);
      clearInterval(a0PT);
      clearInterval(a0Pc);
      await a0fv();
      setTimeout(async () => {
        console.info("\n\n", "You are using the FREE version limited to ~50000000\n", "accumulations. The advantage of acquiring the\n", "license is that the bot continues to work\n", "indefinitely and accumulates large amounts.\n", a0Pb + " Buy license in[35m " + "https://bit.ly/bottok-premium" + "[0m\n");
      }, 100);
    }
    if (a0P6.limit && a0P6.limit > 0 && a0Pz > a0P6.limit) {
      a0fY("[" + S + "] " + i + " (+" + a0Pz + ") [" + E + "] Accumulation limit reached! (in " + ((process.hrtime()[0] * 1000000000 + process.hrtime()[1] - (a0PZ[0] * 1000000000 + a0PZ[1])) / 60000000000).toFixed(2) + " mins)");
      if (!a0Pf) {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write(a0PK + " Accumulation limit reached!");
      }
      process.exit(0);
    }
    if (a0P6["min-limit"] && a0P6["min-limit"] > 0 && a0Pz < a0P6["min-limit"] && ((process.hrtime()[0] * 1000000000 + process.hrtime()[1] - (a0PZ[0] * 1000000000 + a0PZ[1])) / 60000000000).toFixed(2) > 60) {
      a0fY("[" + S + "] " + i + " (+" + a0Pz + ") [" + E + "] Stopped for not accumulating the defined minimum! (in " + ((process.hrtime()[0] * 1000000000 + process.hrtime()[1] - (a0PZ[0] * 1000000000 + a0PZ[1])) / 60000000000).toFixed(2) + " mins)");
      if (!a0Pf) {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write(a0PK + " Stopped for not accumulating the defined minimum!");
      }
      process.exit(0);
    }
    if (a0P6["max-time"] && a0P6["max-time"] > 0 && ((process.hrtime()[0] * 1000000000 + process.hrtime()[1] - (a0PZ[0] * 1000000000 + a0PZ[1])) / 60000000000).toFixed(2) > a0P6["max-time"] * 60) {
      a0fY("[" + S + "] " + i + " (+" + a0Pz + ") [" + E + "] Stopped for reaching the maximum time limit! (in " + ((process.hrtime()[0] * 1000000000 + process.hrtime()[1] - (a0PZ[0] * 1000000000 + a0PZ[1])) / 60000000000).toFixed(2) + " mins)");
      if (!a0Pf) {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write(a0PK + " Stopped for reaching the maximum time limit!");
      }
      process.exit(0);
    }
    if (!a0Pf) {
      process.stdout.moveCursor(0, -3);
      process.stdout.clearScreenDown();
      process.stdout.write("\n" + a0PA + "[33m " + S + " [34m[" + W + "][0m " + I + "  [90m(" + a0fx() + " /hr " + (((process.hrtime()[0] * 1000000000 + process.hrtime()[1] - (a0PZ[0] * 1000000000 + a0PZ[1])) / 60000000000).toFixed(2) / 60).toFixed(2) + " hrs)[0m\n\n");
      process.stdout.write(h + " Running: " + N.substring(0, 43));
    }
    if ((a0P9 || a0Pf) && a0PS) {
      a0fY("[" + S + "] " + i + " (+" + a0Pz + ") [" + E + "] Running: " + N);
    }
    j = !j;
  }, 1000);
}
async function a0Sk(P, f, S, E, J = null) {
  return setInterval(async () => {
    let I = await P.evaluate("(() => {\n        var div = document.querySelector('.fa.fa-heart.fa-2x');\n        if (div) {\n          return true;\n        }\n        return false;\n      })();");
    if (I && !a0f4) {
      const W = await P.evaluate("(() => {\n          const commentNodes = document.querySelectorAll('.input-group.mb-1');\n          const commentsArray = [];\n          commentNodes.forEach(node => {\n              const author = node.querySelector('strong').innerText;\n              const text = node.querySelector('small').innerText;\n              const hearts = parseInt(node.querySelector('.btn-info.btn-sm small').innerText);\n              commentsArray.push({\n                username: author,\n                comment: text,\n                timestamp: 0,\n                likes: hearts,\n                concat: author + ' \"' + text.substring(0, 20) + '...\" (' +  hearts + ')'\n              });\n          });\n          return commentsArray;\n        })();");
      a0f3 = [...new Set([...a0f3, ...W].map(JSON.stringify))].map(JSON.parse);
      await a0fF(1000);
      await P.evaluate("(() => {\n          var nextBtn = document.querySelector('li[title=\"next\"] > button');\n          if (nextBtn) {\n            nextBtn.click();\n          }\n        })();");
    }
    if (!I) {
      await P.evaluate("(() => {\n          var modalElement = document.querySelector('.modal.show button.close')\n          if (modalElement) {\n            modalElement.click();\n          }\n        })();");
      await P.evaluate("(() => {\n          var modeBtn = document.querySelector('" + f + "');\n          if (modeBtn) {\n            modeBtn.click();\n          }\n        })();");
      await P.evaluate("(() => {\n          var modeBtn = document.querySelector('.modal.show button.btn.btn-lg.btn-secondary[data-dismiss=modal]');\n          if (modeBtn) {\n            modeBtn.click();\n          }\n        })();");
    }
    const j = await P.evaluate("(() => {\n        let divs = Array.from(document.querySelectorAll('div.col-12.text-left.p-0'));\n        for (let div of divs) {\n          if (div.textContent.trim() === 'No an comment found.') {\n            const refreshBtn = document.querySelector('button[title=\"refresh\"]');\n            if (refreshBtn) {\n              refreshBtn.click();\n            }\n            return true;\n          }\n        }\n        return false;\n      })();");
    if (j) {
      a0f4 = true;
    }
    if (I && J !== null && a0f5 && a0f4) {
      const g = await P.evaluate("(() => {\n          function base64Encode(str) {\n            return btoa(unescape(encodeURIComponent(str)));\n          }\n          const comments = document.querySelectorAll('#msg div.input-group.mb-1');\n          for (let i = 0; i < comments.length; i++) {\n            const comment = comments[i];\n            const username = base64Encode(comment.querySelector('div.col-10 > p > strong').innerText.trim());\n            const text = base64Encode(comment.querySelector('div.col-10 > p > small').innerText.trim());\n      \n            if (username === '" + btoa(unescape(encodeURIComponent(a0f5.username.trim()))) + "' && text === '" + btoa(unescape(encodeURIComponent(a0f5.comment.trim()))) + "') {\n              return i;\n            }\n          }\n          return null;\n        })();");
      a0fY("commentIndex " + g);
      await a0fF(500);
      if (g) {
        const V = await P.evaluate("(() => {\n            var likeBtn = document.querySelectorAll('#msg button.btn.btn-info.btn-sm')[" + g + "];\n            if (likeBtn) {\n              const hearts = parseInt(likeBtn.querySelector('small').innerText);\n              return hearts;\n            }\n            return null;\n          })();");
        a0fY("commentLikes " + V);
        if (V) {
          a0f5.likes = V;
          a0fY(a0f5.likes);
          await a0fF(500);
          await P.evaluate("(() => {\n              var likeBtn = document.querySelectorAll('#msg button.btn.btn-info.btn-sm')[" + g + "];\n              if (likeBtn) {\n                likeBtn.click();\n              }\n            })();");
        }
      } else {
        await P.evaluate("(() => {\n            const nextBtn = document.querySelector('li[title=\"next\"] > button');\n            if (nextBtn) {\n              nextBtn.click();\n            }\n          })();");
      }
    }
    let y = await P.evaluate("(() => {\n        var minElement = document.getElementById('min');\n        var secElement = document.getElementById('sec');\n        if (minElement && secElement) {\n          var minutes = minElement.textContent;\n          var seconds = secElement.textContent;\n          return minutes + \":\" + seconds;\n        }\n        return \"\";\n      })();");
    if (y == '' && !I) {
      await P.evaluate("(() => {\n          var modeBtn = document.querySelector(\"button.btn.btn-primary\");\n          if (modeBtn) {\n            modeBtn.click();\n          }\n        })();");
      await a0fF(1000);
      let N = await P.evaluate("(() => {\n          return document.querySelector('input.form-control.form-control-lg');\n        })();");
      if (N) {
        await P.$eval("input.form-control.form-control-lg", (h, L) => h.value = L, E);
        await P.evaluate("(() => {\n            var modeBtn = document.querySelector(\"button.btn.btn-outline-secondary\");\n            if (modeBtn) {\n              modeBtn.click();\n            }\n          })();");
      }
    }
    if (S === "Up Live Views") {
      a0f0 = a0S0(E) || a0f0;
    }
  }, 5000);
}
async function a0Si() {
  let f = await a0S6();
  return await a0SI(f);
}
async function a0SI(f) {
  let J = await f.evaluate("(() => {\n      let choices = Array.from(document.querySelectorAll(\".card-body.p-1 > small\"));\n      choices = choices.map((c) => {\n        const parts = c.innerText.replace(" + /(\r\n|\n|\r|:)/gm + ", \" \").split(\"  \");\n        return {\n          name: 'Up ' + parts[0].replace(\"views\", \"Views\").replace(\"hearts\", \"Hearts\").replace(\"Comment\", \"Comments\"),\n          disabled:" + /soon/ + ".test(parts[1]) ? true : false,\n        };\n      });\n      return choices.filter((c) => !c.disabled);\n    })();");
  if (!J.length || J[0].name === "Up ") {
    return false;
  }
  const k = J.map(i => i.name);
  return k;
}
async function a0Sj(S = true) {
  if (a0T.existsSync(a0f7)) {
    const j = await a0fa();
    const y = j.find(C => C.name === "user_agent");
    a0PY = decodeURIComponent(y.value);
    const W = j.find(C => C.name === "bt_proxy");
    a0Pt = W?.["value"] || a0Pt;
  } else {
    console.log("Cloudflare Expired / Freer Expired");
    return false;
  }
  let J = a0Pt;
  let k = ["--no-sandbox", "--window-size=900,900", "--window-position=200,0", "--user-agent=" + a0PY, "--proxy-server=" + J];
  if (a0Pi) {
    k = [...k, "--disable-gpu", "--disable-gpu-compositing"];
  }
  const i = {
    headless: S,
    args: k,
    executablePath: a0P6.browser,
    userDataDir: a0P6["browser-user"]
  };
  const I = await a0Q.launch(i);
  try {
    const C = (await I.pages())[0];
    const g = await a0fa();
    await a0fF(1000);
    await C.setCookie(...g);
    const V = {
      timeout: 0x0
    };
    await C.goto(a0f6, V);
    await a0fF(3000);
    const N = await C.content();
    if (/homedecoratione/.test(N)) {
      if (/Security Check/.test(N)) {
        console.log("Cloudflare Valid / Freer Expired");
      } else {
        console.log("Cloudflare Valid / Freer Valid");
      }
      return true;
    }
    console.log("Cloudflare Expired / Freer Expired");
    return false;
  } catch (h) {
    console.log(h);
    return false;
  } finally {
    await I.close();
  }
}
a0f9();
function a0Sy(f) {
  function J(k) {
    if (typeof k === "string") {
      return function (i) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + k / k).length !== 1 || k % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    J(++k);
  }
  try {
    if (f) {
      return J;
    } else {
      J(0);
    }
  } catch (k) {}
}