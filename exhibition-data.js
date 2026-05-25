const EXHIBITION = {
  "dir": "./assets/exhibition",
  "captions": {
    "1": "Cụ phó bảng Nguyễn Sinh Sắc, thân phụ Chủ tịch Hồ Chí Minh.",
    "2": ". Bà Hoàng Thị Loan, thân mẫu Chủ tịch Hồ Chí Minh.",
    "3": "Bà Nguyễn Thị Thanh, chị ruột Chủ tịch Hồ Chí Minh.",
    "4": "Ông Nguyễn Sinh Khiêm, anh ruột Chủ tịch Hồ Chí Minh.",
    "5": "Quê ngoại Hoàng Trù (tức làng Chùa), nay thuộc xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An, nơi Nguyễn Sinh Cung ra đời",
    "6": "Làng Sen, quê nội, nay thuộc xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An nơi Nguyễn Sinh Cung sống lúc nhỏ.",
    "7": "Nhà số 112 đường Mai Thúc Loan, thành nội Huế, nơi gia đình Nguyễn Sinh Cung sinh sống thời gian ở Huế (1895-1901)",
    "8": "Nhà ông Nguyễn Sĩ Khuyến, làng Dương Nỗ, huyện Phú Vang ngoại ô thành phố Huế, nơi Nguyễn Sinh Cung cùng cha, anh ở trọ thời gian ở Huế (1898-1901).",
    "9": "Nhà cụ Vương Thúc Quý (xã Kim Liên, huyện Nam Đàn, Nghệ An) nơi Nguyễn Tất Thành học chữ Hán trong những năm 1901-1906",
    "10": "Trường Quốc học Huế, nơi Nguyễn Tất Thành theo học niên khóa 1907-1908.",
    "11": "Trường Dục Thanh, Phan Thiết, tỉnh Bình Thuận, nơi Nguyễn Tất Thành dạy học trước khi vào Sài Gòn (tháng 6-1910 đến tháng 2-1911).",
    "12": "Tòa Khâm sứ Trung Kỳ, nơi Nguyễn Tất Thành tham gia đấu tranh chống thuế năm 1908",
    "13": "Nhà số 5 đường Châu Văn Liêm, quận 5, thành phố Hồ Chí Minh, nơi Nguyễn Tất Thành đã trú chân trước khi ra đi tìm đường cứu nước (đầu năm 1911).",
    "14": "Trường Cơ khí Á châu Sài Gòn, nơi Nguyễn Tất Thành học nghề một thời gian ngắn đầu năm 1911.",
    "15": "Bến cảng Sài Gòn nơi Nguyễn Tất Thành ra đi tìm đường cứu nước",
    "16": "Tàu Amiral Latouche Tréville. Trên chiếc tàu này, năm 1911 người thanh niên yêu nước Nguyễn Tất Thành rời Tổ quốc đi tìm đường cứu nước.",
    "17": "Cảng biển Marseille, một hải cảng quan trọng của nước Pháp, nơi đầu tiên trên đất Pháp mà Nguyễn Tất Thành đặt chân đến (ngày 6 tháng 7 năm 1911).",
    "18": "Nguyễn Tất Thành làm phụ bếp ở khách sạn Carlton.",
    "19": "Khách sạn Carlton, phố Haymarket, một khách sạn nổi tiếng ở London vào thời đó, nơi Nguyễn Tất Thành làm việc vào năm 1913.",
    "20": "Nguyễn Ái Quốc (năm 1919)",
    "21": "Nhà số 6 phố Villa Des Gobelins, quận 12, Paris, trụ sở Hội Những người Việt Nam yêu nước tại Pháp. Nơi Nguyễn Ái Quốc đã ở từ tháng 7 năm 1919 đến tháng 7 năm 1921.",
    "22": "Nguyễn Ái Quốc, đại biểu Đông Dương, tham dự Đại hội toàn quốc Đảng Xã hội Pháp ở thành phố Tours (nước Pháp), tháng 12 năm 1920. Tại Đại hội, Nguyễn Ái Quốc tán thành việc gia nhập Quốc tế III (Quốc tế Cộng sản), là thành viên sáng lập Đảng Cộng sản Pháp, trở thành người cộng sản đầu tiên của dân tộc Việt Nam.",
    "23": "Toàn cảnh Đại hội Tours, đồng chí Nguyễn Ái Quốc ngồi đầu dãy bàn thứ hai, phía bên trái đoàn chủ tịch.",
    "24": "Nhà số 3 Marche des Patriarches, trụ sở của Hội Liên hiệp thuộc địa.",
    "25": "Những tranh châm biếm in trên báo Le Paria do Nguyễn Ái Quốc vẽ, Người vạch trần luận điệu của bọn thực dân Pháp tự xưng là “khai hóa chính nghĩa” và “Giàu lòng bác á",
    "26": "Những tranh châm biếm in trên báo Le Paria do Nguyễn Ái Quốc vẽ, Người vạch trần luận điệu của bọn thực dân Pháp tự xưng là “khai hóa chính nghĩa” và “Giàu lòng bác á",
    "27": "Trụ sở đầu tiên báo Le Paria ở nhà số 16, phố Jacques Callot.",
    "28": "Nhà số 9 ngõ Compoint, quận 17 Paris, nơi Nguyễn Ái Quốc đã ở từ năm 1920 đến năm 1923.",
    "29": "Với tư cách đại biểu chính thức của nông dân Đông Dương, Nguyễn Ái Quốc tham gia và phát biểu tại hội nghị Hội nghị lần thứ nhất Quốc tế Nông dân tại Moskva (Liên Xô) tháng 10 năm 1923.",
    "30": "Nguyễn Ái Quốc được bầu vào Ban Chấp hành tại Hội nghị Quốc tế Nông dân.",
    "31": "Thẻ đại biểu Đại hội 5 Quốc tế Cộng sản của Nguyễn Ái Quốc tại Moskva năm 1924.",
    "32": "Nguyễn Ái Quốc là một trong số cán bộ cộng sản có uy tín trong Quốc tế Cộng sản.",
    "33": "Từ trên diễn đàn của Đại hội 5 Quốc tế Cộng sản họp năm 1924 ở Moskva. Với tư cách là đại biểu của Bộ Thuộc địa Đảng Cộng sản Pháp, Nguyễn Ái Quốc đã lên tiếng kêu gọi: “Cần phải tập trung tất cả sức lực và nghị lực của chúng ta vào vấn đề thuộc địa cũng như các vấn đề khác để thực hiện trong thực tế những lời giáo huấn của Lenin”",
    "34": "Nguyễn Ái Quốc với một số đại biểu mừng thắng lợi Đại hội 5 Quốc tế Cộng sản trên đồi Lenin ở Moskva năm 1924.",
    "35": "Nguyễn Ái Quốc với một số đại biểu dự Đại hội 5 Quốc tế Cộng sản.",
    "36": "Sau Đại hội 5 Quốc tế Cộng sản, Nguyễn Ái Quốc về Quảng Châu tham gia cách mạng Trung Quốc, đồng thời lo xây dựng phong trào cách mạng Việt Nam và Đông Dương.",
    "37": "CÁC THÀNH VIÊN DỰ HỘI NGHỊ THÀNH LẬP ĐẢNG CỘNG SẢN VIỆT NAM NĂM 1930",
    "38": "Trần Phú, người học trò xuất sắc của Nguyễn Ái Quốc, tổng bí thư đầu tiên của Đảng Cộng sản Đông Dương, người khởi thảo Luận cương chính trị của Đảng.",
    "39": "Phong trào Xô Viết Nghệ Tĩnh (1930-1931) một cao trào của cách mạng Việt Nam ngay sau khi Đảng Cộng sản Đông Dương ra đời",
    "40": "Nguyễn Ái Quốc sau khi ra khỏi nhà tù của đế quốc Anh đầu năm 1933",
    "41": "Thẻ đại biểu dự Đại hội 7 Quốc tế Cộng sản của Nguyễn Ái Quốc, năm 1935, ghi tên Lin.",
    "42": "Quang cảnh Đại hội 7 Quốc tế Cộng sản tại Moskva (Liên Xô) tháng 7 năm 1935.",
    "43": "Trường Đại học Quốc tế Lenin, nơi Nguyễn Ái Quốc học từ năm 1934 đến 1936.",
    "44": "Hồ Quang (Nguyễn Ái Quốc) mang quân hàm thiếu tá Bát lộ Quân, làm việc tại bộ phận cơ yếu điện đài đóng tại thôn Mạc Lộ, ngoại ô thành phố Quảng Tây, Trung Quốc vào năm 1938.",
    "45": "Trong những năm 1936-1939, phong trào dân chủ phát triển rộng khắp nước ta, lôi cuốn hàng triệu quần chúng tham gia chống chủ nghĩa phát xít và chế độ thuộc địa đòi quyền dân chủ, dân sinh. Mít tinh của quần chúng ngày 01-5-1933 tại khu Đấu xảo, Hà Nộ",
    "46": "Cột mốc 108, thuộc xã Trường Hà, huyện Hà Quảng, tỉnh Cao Bằng, nơi đầu tiên Bác đặt chân lên quê hương sau 30 năm xa cách.",
    "47": "Ngày 28 tháng 01 năm 1941, Nguyễn Ái Quốc về nước ở Pác Bó (Cao Bằng), trực tiếp lãnh đạo cách mạng Việt Nam.",
    "48": "Lán Khuổi Nậm, Pác Bó, Cao Bằng, nơi Chủ tịch Hồ Chí Minh chủ trì Hội nghị Trung ương 8 của Đảng Cộng sản Đông Dương (tháng 5 năm 1941) họp quyết định thành lập Việt Nam độc lập đồng minh (Mặt trận Việt Minh) lãnh đạo nhân dân cả nước thực hiện nhiệm vụ giải phóng dân tộc.",
    "49": "Lán Khuổi Nậm, Pác Bó, Cao Bằng, nơi Chủ tịch Hồ Chí Minh chủ trì Hội nghị Trung ương 8 của Đảng Cộng sản Đông Dương (tháng 5 năm 1941) họp quyết định thành lập Việt Nam độc lập đồng minh (Mặt trận Việt Minh) lãnh đạo nhân dân cả nước thực hiện nhiệm vụ giải phóng dân tộc.",
    "50": "Lán Khuổi Nậm, Pác Bó, Cao Bằng, nơi Chủ tịch Hồ Chí Minh chủ trì Hội nghị Trung ương 8 của Đảng Cộng sản Đông Dương (tháng 5 năm 1941) họp quyết định thành lập Việt Nam độc lập đồng minh (Mặt trận Việt Minh) lãnh đạo nhân dân cả nước thực hiện nhiệm vụ giải phóng dân tộc.",
    "51": "Trên phiến đá này, năm 1944, Chủ tịch Hồ Chí Minh đã dịch cuốn Lịch sử Đảng Cộng sản Liên Xô và nhiều tài liệu khác ra tiếng Việt.",
    "52": "Bìa tập thơ Ngục trung nhật ký của Hồ Chí Minh",
    "53": "Cây đa Tân Trào, nơi xuất phát của Giải phóng Quân lên đường chiến đấu tiến về Hà Nội ngày 16-8-1945.",
    "54": "Ngày 16 tháng 8 năm 1945, Quốc dân Đại hội do Mặt trận Việt Minh triệu tập ở đình Tân Trào (tỉnh Tuyên Quang) quyết định tổng khởi nghĩa và bầu ra Ủy ban Giải phóng dân tộc (tức Chính phủ lâm thời) do Hồ Chí Minh làm Chủ tịch",
    "55": "Theo chỉ thị của Hồ Chí Minh, đội Việt Nam tuyên truyền giải phóng Quân, hình thức ban đầu của Quân đội Nhân dân ngày nay được thành lập ngày 22-12-1944.",
    "56": "",
    "57": "“Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thực đã thành một nước tự do và độc lập. Toàn thể dân Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do và độc lập ấy ”",
    "58": "Ngày 02 tháng 9 năm 1945 tại Hà Nội, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa, mở ra kỷ nguyên mới của lịch sử dân tộc. Câu hỏi của Người “Tôi nói đồng bào nghe rõ không?” từ đây khắc sâu trong trái tim mỗi người dân Việt Nam.",
    "59": "Chủ tịch Hồ Chí Minh trong phòng làm việc của Người ở Phủ Chủ tịch năm 1946",
    "60": "Ngày 31 tháng 5 năm 1946, Chủ tịch Hồ Chí Minh dẫn đầu đoàn đại biểu chính phủ ta sang đàm phán chính thức với chính phủ Pháp",
    "61": "Quốc hội đầu tiên của nước Việt Nam Dân chủ Cộng hòa ra đời sau cuộc tuyển cử đầu tiên trong cả nước ngày 06 tháng 01 năm 1946.",
    "62": "Chính phủ dân chủ cách mạng đầu tiên của nước Việt Nam Dân chủ Cộng hòa do Hồ Chí Minh làm Chủ tịch được thành lập và ra mắt quốc dân.",
    "63": "Tháng 02 năm 1946, Chủ tịch Hồ Chí Minh nói chuyện với hơn 10 vạn nhân dân thủ đô Hà Nội sau cuộc tổng tuyển cử bầu ra Quốc hội đầu tiên của nước Việt Nam Dân chủ Cộng hòa.",
    "64": "Chủ tịch Hồ Chí Minh với Thủ tướng Pháp Georges tại Pháp, ngày 02 tháng 07 năm 1946.",
    "65": "Sau khi ký với chính phủ Pháp bản tạm ước 14-9-1946, Chủ tịch Hồ Chí Minh tuyên bố quyết tâm của toàn dân tộc Việt Nam nhất định không chịu làm nô lệ lần nữa.",
    "66": "",
    "67": "Trong ngôi nhà này tại làng Vạn Phúc, tỉnh Hà Đông, Chủ tịch Hồ Chí Minh và Thường vụ Trung ương Đảng đã họp Hội nghị quyết định tiến hành cuộc trường kỳ kháng chiến chống thực dân Pháp.",
    "68": "Ngôi nhà sàn đơn sơ, nơi ở và làm việc của Chủ tịch Hồ Chí Minh tại Việt Bắc trong cuộc kháng chiến chống thực dân Pháp.",
    "69": "Vị Chủ tịch nước đích thân vác cuốc tăng gia sản xuất để tham gia “diệt giặc đói”.",
    "70": "Năm 1949, Đoàn đại biểu thanh niên Nam Bộ ra thăm miền Bắc đã tới quây quần bên vị lãnh tụ kính yêu của dân tộc. Miền Nam là nơi đầu tiên trong cả nước phải chống Pháp tái chiếm (từ 23-9-1945)",
    "71": "Từ chiếc máy chữ này, Chủ tịch Hồ Chí Minh đã cho ra đời nhiều văn kiện quan hệ đến vận mệnh của Tổ quốc.",
    "72": "Chủ tịch Hồ Chí Minh sống và làm việc tại Hang Bồng thuộc xã Tân Trào, huyện Sơn Dương, tỉnh Tuyên Quang, năm 1951.",
    "73": "Chủ tịch Hồ Chí Minh họp với Thường vụ Trung ương Đảng quyết định mở chiến dịch Biên giới năm 1950.",
    "74": "Chủ tịch Hồ Chí Minh lội suối đi công tác.",
    "75": "Chủ tịch Hồ Chí Minh thăm các đơn vị bộ đội tham gia chiến dịch Biên giới.",
    "76": "Chủ tịch Hồ Chí Minh trên đài quan sát Mặt trận Đông Khê (Cao Bằng) năm 1950.",
    "77": "Chủ tịch Hồ Chí Minh - người sáng lập và lãnh đạo quân đội ta - theo dõi mặt trận suốt thời gian chiến dịch Biên giới. Nơi ở của Người chuyển theo các trận đánh, có khi chỉ là túp lều cỏ dựng tạm vài hôm.",
    "78": "Chủ tịch Hồ Chí Minh - vị tổng tư lệnh tối cao.",
    "79": "Ở Việt Bắc, Bác Hồ thường đến thăm gia đình đồng bào các dân tộc",
    "80": "Nhận định về triển vọng cuộc kháng chiến chống thực dân Pháp, Chủ tịch Hồ Chí Minh viết trong báo cáo: “Nay tuy châu chấu đá voi, Nhưng mai voi sẽ bị lòi ruột ra”.",
    "81": "Chủ tịch Hồ Chí Minh trong phòng làm việc của Người ở căn cứ Việt Bắc.",
    "82": "Chủ tịch Hồ Chí Minh với các đại biểu Đại hội thống nhất Việt Minh – Liên Việt, năm 1951.",
    "83": "Cuối năm 1953, Chủ tịch Hồ Chí Minh và các đồng chí lãnh đạo Đảng quyết định mở chiến dịch Điện Biên Phủ.",
    "84": "Chủ tịch Hồ Chí Minh thưởng huy hiệu cho các chiến sĩ có nhiều chiến công ở Điện Biên Phủ.",
    "85": "Sau 58 ngày đêm chiến đấu, ngày 07-5-1954, quân ta toàn thắng ở Điện Biên Phủ. Lá cờ quyết chiến quyết thắng của Hồ Chủ tịch tặng các đơn vị tham gia chiến dịch Điện Biên Phủ tung bay phấp phới trên nắp hầm chỉ huy của địch.",
    "86": "Bác tát nước chống hạn ở cánh đồng Quang Tó, xã Đại Thanh, tỉnh Hà Tây (1958)",
    "87": "Bác kéo lưới cùng ngư dân Sầm Sơn, Thanh Hóa",
    "88": "Đến thăm nhà máy xe lửa Gia Lâm, Bác nhắc nhở công nhân, cán bộ phát huy truyền thống cách mạng của nhà máy, ra sức xây dựng miền Bắc, ủng hộ miền Nam",
    "89": "Ngày 30-5-1957, Bác thăm cảng Hải Phòng và nói chuyện với nhân dân thành phố.",
    "90": "Bác đi thăm dây chuyền sản xuất và vận chuyển than ở khu mỏ Quảng Ninh (1965)",
    "91": "Ngày 01 tháng 01 năm 1960, Chủ tịch Hồ Chí Minh ký sắc lệnh công bố hiến pháp xã hội chủ nghĩa đầu tiên của nước ta.",
    "92": "Ngày 05 tháng 9 năm 1960, Đảng Lao động Việt Nam họp Đại hội đại biểu toàn quốc lần thứ 3. Trong diễn văn khai mạc, Người nêu rõ: “… Đại hội lần này là đại hội xây dựng chủ nghĩa xã hội ở miền Bắc và đấu tranh hòa bình thống nhất nước nhà”.",
    "93": "Bác bắt nhịp bài “Kết đoàn” trong buổi hòa nhạc mừng Đại hội Đảng năm 1960.",
    "94": "Đại biểu học sinh Trường trung học Trưng Vương (Hà Nội) đến chúc thọ Bác (tháng 5-1956)",
    "95": "Bác thăm lớp bổ túc văn hóa khu lao động Lương Yên, Hà Nội (1956)",
    "96": "Bác thăm bệnh viện Bạch Mai, Hà Nội (21-3-1960).",
    "97": "Đại hội văn nghệ toàn quốc lần thứ 2 (1957) vui sướng chào mừng Chủ tịch Hồ Chí Minh.",
    "98": "Tại Đại hội lần thứ 3 những người viết báo Việt Nam, Chủ tịch Hồ Chí Minh – nhà báo vô sản đầu tiên và lớn nhất của Việt Nam – căn dặn: “Cán bộ báo chí cũng là chiến sĩ cách mạng. Cây bút trang giấy là vũ khí sắc bén”.",
    "99": "Bác với các đại biểu dự Hội nghị Công giáo toàn quốc (09-3-1955)",
    "100": "Bác với các đại biểu Hội Phật giáo Việt Nam, ngày 03-01-1957",
    "101": "Bác dặn dò thanh niên tại Đại hội đại biểu toàn quốc Đoàn thanh niên Cứu quốc lần thứ 2 (1956)",
    "102": "Bác rất quan tâm đến việc giải phóng phụ nữ. Năm 1956 tại Hội nghị cán bộ phụ nữ toàn miền Bắc, Người căn dặn: “Đoàn kết chặt chẽ, ra sức tham gia xây dựng chủ nghĩa xã hội ở miền Bắc, đấu tranh thống nhất nước nhà và giữ gìn hòa bình thế giới. Là con cháu xứng đáng của Bà Trưng, Bà Triệu, chắc các cô sẽ hoàn thành thắng lợi nhiệm vụ vẻ vang ấy”.",
    "103": "Phụ nữ các dân tộc Tây Bắc vui mừng được gặp Bác Hồ (1959).",
    "104": "Hằng ngày, Bác Hồ vun xới cây vú sữa của đồng bào miền Nam gửi tặng với tấm lòng thương yêu vô hạn miền Nam anh hùng. Bác nói: “Miền Nam luôn luôn ở trong trái tim tôi",
    "105": "Chủ tịch Hồ Chí Minh thay mặt Đảng Lao động Việt Nam ký vào bản tuyên bố của Hội nghị 81 đảng cộng sản họp tại Moskva (1960).",
    "106": "Bulgaria (1957)",
    "107": "Indonesia (1959)",
    "108": "Chủ tịch Hồ Chí Minh và Hoàng thân Souphanouvong, chủ tịch Mặt trận Lào yêu nước.",
    "109": "Chủ tịch Hồ Chí Minh và Thủ tướng Ấn Độ Nehru.",
    "110": "Tại Hội nghị, Bác kêu gọi “mỗi người làm việc bằng hai để đền đáp cho đồng bào miền Nam ruột thịt”.",
    "111": "Bác thăm bộ đội không quân (1967).",
    "112": "Bác và các anh hùng, dũng sĩ miền Nam.",
    "113": "Bác Hồ với các anh hùng và chiến sĩ thi đua miền Nam. Bác nói: “Chúng ta vô cùng tự hào về miền Nam anh hùng của chúng ta. Suốt 20 năm trời, đồng bào miền Nam ta đã không ngừng đấu tranh để bảo vệ Tổ quốc. Hết chống thực dân Pháp lại chống đế quốc Mỹ, lực lượng yêu nước miền Nam đã vượt mọi gian khổ, khó khăn, càng đánh càng mạnh, càng đánh càng thắng. Thật xứng đáng với danh hiệu Thành đồng Tổ quốc”.",
    "114": "Bác Hồ tại Đại hội anh hùng, chiến sĩ thi đua chống Mỹ, cứu nước lần thứ 4 (1966)",
    "115": "Bác Hồ tặng hoa phong lan cho các đại biểu nữ dân quân Quảng Bình, Vĩnh Linh (tháng 9-1968)",
    "116": "",
    "117": ""
  },
  "phaseImages": [
    [
      {
        "id": 1,
        "title": "Cụ phó bảng Nguyễn Sinh Sắc, thân phụ Chủ tịch Hồ Chí Minh."
      },
      {
        "id": 2,
        "title": ". Bà Hoàng Thị Loan, thân mẫu Chủ tịch Hồ Chí Minh."
      },
      {
        "id": 3,
        "title": "Bà Nguyễn Thị Thanh, chị ruột Chủ tịch Hồ Chí Minh."
      },
      {
        "id": 4,
        "title": "Ông Nguyễn Sinh Khiêm, anh ruột Chủ tịch Hồ Chí Minh."
      },
      {
        "id": 5,
        "title": "Quê ngoại Hoàng Trù (tức làng Chùa), nay thuộc xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An, nơi Nguyễn Sinh Cung ra đời"
      },
      {
        "id": 6,
        "title": "Làng Sen, quê nội, nay thuộc xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An nơi Nguyễn Sinh Cung sống lúc nhỏ."
      },
      {
        "id": 7,
        "title": "Nhà số 112 đường Mai Thúc Loan, thành nội Huế, nơi gia đình Nguyễn Sinh Cung sinh sống thời gian ở Huế (1895-1901)"
      },
      {
        "id": 8,
        "title": "Nhà ông Nguyễn Sĩ Khuyến, làng Dương Nỗ, huyện Phú Vang ngoại ô thành phố Huế, nơi Nguyễn Sinh Cung cùng cha, anh ở trọ thời gian ở Huế (1898-1901)."
      },
      {
        "id": 9,
        "title": "Nhà cụ Vương Thúc Quý (xã Kim Liên, huyện Nam Đàn, Nghệ An) nơi Nguyễn Tất Thành học chữ Hán trong những năm 1901-1906"
      },
      {
        "id": 10,
        "title": "Trường Quốc học Huế, nơi Nguyễn Tất Thành theo học niên khóa 1907-1908."
      },
      {
        "id": 11,
        "title": "Trường Dục Thanh, Phan Thiết, tỉnh Bình Thuận, nơi Nguyễn Tất Thành dạy học trước khi vào Sài Gòn (tháng 6-1910 đến tháng 2-1911)."
      },
      {
        "id": 12,
        "title": "Tòa Khâm sứ Trung Kỳ, nơi Nguyễn Tất Thành tham gia đấu tranh chống thuế năm 1908"
      },
      {
        "id": 13,
        "title": "Nhà số 5 đường Châu Văn Liêm, quận 5, thành phố Hồ Chí Minh, nơi Nguyễn Tất Thành đã trú chân trước khi ra đi tìm đường cứu nước (đầu năm 1911)."
      },
      {
        "id": 14,
        "title": "Trường Cơ khí Á châu Sài Gòn, nơi Nguyễn Tất Thành học nghề một thời gian ngắn đầu năm 1911."
      },
      {
        "id": 15,
        "title": "Bến cảng Sài Gòn nơi Nguyễn Tất Thành ra đi tìm đường cứu nước"
      },
      {
        "id": 16,
        "title": "Tàu Amiral Latouche Tréville. Trên chiếc tàu này, năm 1911 người thanh niên yêu nước Nguyễn Tất Thành rời Tổ quốc đi tìm đường cứu nước."
      }
    ],
    [
      {
        "id": 17,
        "title": "Cảng biển Marseille, một hải cảng quan trọng của nước Pháp, nơi đầu tiên trên đất Pháp mà Nguyễn Tất Thành đặt chân đến (ngày 6 tháng 7 năm 1911)."
      },
      {
        "id": 18,
        "title": "Nguyễn Tất Thành làm phụ bếp ở khách sạn Carlton."
      },
      {
        "id": 19,
        "title": "Khách sạn Carlton, phố Haymarket, một khách sạn nổi tiếng ở London vào thời đó, nơi Nguyễn Tất Thành làm việc vào năm 1913."
      },
      {
        "id": 20,
        "title": "Nguyễn Ái Quốc (năm 1919)"
      },
      {
        "id": 21,
        "title": "Nhà số 6 phố Villa Des Gobelins, quận 12, Paris, trụ sở Hội Những người Việt Nam yêu nước tại Pháp. Nơi Nguyễn Ái Quốc đã ở từ tháng 7 năm 1919 đến tháng 7 năm 1921."
      },
      {
        "id": 22,
        "title": "Nguyễn Ái Quốc, đại biểu Đông Dương, tham dự Đại hội toàn quốc Đảng Xã hội Pháp ở thành phố Tours (nước Pháp), tháng 12 năm 1920. Tại Đại hội, Nguyễn Ái Quốc tán thành việc gia nhập Quốc tế III (Quốc tế Cộng sản), là thành viên sáng lập Đảng Cộng sản Pháp, trở thành người cộng sản đầu tiên của dân tộc Việt Nam."
      },
      {
        "id": 23,
        "title": "Toàn cảnh Đại hội Tours, đồng chí Nguyễn Ái Quốc ngồi đầu dãy bàn thứ hai, phía bên trái đoàn chủ tịch."
      }
    ],
    [
      {
        "id": 24,
        "title": "Nhà số 3 Marche des Patriarches, trụ sở của Hội Liên hiệp thuộc địa."
      },
      {
        "id": 25,
        "title": "Những tranh châm biếm in trên báo Le Paria do Nguyễn Ái Quốc vẽ, Người vạch trần luận điệu của bọn thực dân Pháp tự xưng là “khai hóa chính nghĩa” và “Giàu lòng bác á"
      },
      {
        "id": 26,
        "title": "Những tranh châm biếm in trên báo Le Paria do Nguyễn Ái Quốc vẽ, Người vạch trần luận điệu của bọn thực dân Pháp tự xưng là “khai hóa chính nghĩa” và “Giàu lòng bác á"
      },
      {
        "id": 27,
        "title": "Trụ sở đầu tiên báo Le Paria ở nhà số 16, phố Jacques Callot."
      },
      {
        "id": 28,
        "title": "Nhà số 9 ngõ Compoint, quận 17 Paris, nơi Nguyễn Ái Quốc đã ở từ năm 1920 đến năm 1923."
      },
      {
        "id": 29,
        "title": "Với tư cách đại biểu chính thức của nông dân Đông Dương, Nguyễn Ái Quốc tham gia và phát biểu tại hội nghị Hội nghị lần thứ nhất Quốc tế Nông dân tại Moskva (Liên Xô) tháng 10 năm 1923."
      },
      {
        "id": 30,
        "title": "Nguyễn Ái Quốc được bầu vào Ban Chấp hành tại Hội nghị Quốc tế Nông dân."
      },
      {
        "id": 31,
        "title": "Thẻ đại biểu Đại hội 5 Quốc tế Cộng sản của Nguyễn Ái Quốc tại Moskva năm 1924."
      },
      {
        "id": 32,
        "title": "Nguyễn Ái Quốc là một trong số cán bộ cộng sản có uy tín trong Quốc tế Cộng sản."
      },
      {
        "id": 33,
        "title": "Từ trên diễn đàn của Đại hội 5 Quốc tế Cộng sản họp năm 1924 ở Moskva. Với tư cách là đại biểu của Bộ Thuộc địa Đảng Cộng sản Pháp, Nguyễn Ái Quốc đã lên tiếng kêu gọi: “Cần phải tập trung tất cả sức lực và nghị lực của chúng ta vào vấn đề thuộc địa cũng như các vấn đề khác để thực hiện trong thực tế những lời giáo huấn của Lenin”"
      },
      {
        "id": 34,
        "title": "Nguyễn Ái Quốc với một số đại biểu mừng thắng lợi Đại hội 5 Quốc tế Cộng sản trên đồi Lenin ở Moskva năm 1924."
      },
      {
        "id": 35,
        "title": "Nguyễn Ái Quốc với một số đại biểu dự Đại hội 5 Quốc tế Cộng sản."
      }
    ],
    [
      {
        "id": 36,
        "title": "Sau Đại hội 5 Quốc tế Cộng sản, Nguyễn Ái Quốc về Quảng Châu tham gia cách mạng Trung Quốc, đồng thời lo xây dựng phong trào cách mạng Việt Nam và Đông Dương."
      },
      {
        "id": 37,
        "title": "CÁC THÀNH VIÊN DỰ HỘI NGHỊ THÀNH LẬP ĐẢNG CỘNG SẢN VIỆT NAM NĂM 1930"
      },
      {
        "id": 38,
        "title": "Trần Phú, người học trò xuất sắc của Nguyễn Ái Quốc, tổng bí thư đầu tiên của Đảng Cộng sản Đông Dương, người khởi thảo Luận cương chính trị của Đảng."
      }
    ],
    [
      {
        "id": 39,
        "title": "Phong trào Xô Viết Nghệ Tĩnh (1930-1931) một cao trào của cách mạng Việt Nam ngay sau khi Đảng Cộng sản Đông Dương ra đời"
      },
      {
        "id": 40,
        "title": "Nguyễn Ái Quốc sau khi ra khỏi nhà tù của đế quốc Anh đầu năm 1933"
      },
      {
        "id": 41,
        "title": "Thẻ đại biểu dự Đại hội 7 Quốc tế Cộng sản của Nguyễn Ái Quốc, năm 1935, ghi tên Lin."
      },
      {
        "id": 42,
        "title": "Quang cảnh Đại hội 7 Quốc tế Cộng sản tại Moskva (Liên Xô) tháng 7 năm 1935."
      },
      {
        "id": 43,
        "title": "Trường Đại học Quốc tế Lenin, nơi Nguyễn Ái Quốc học từ năm 1934 đến 1936."
      },
      {
        "id": 44,
        "title": "Hồ Quang (Nguyễn Ái Quốc) mang quân hàm thiếu tá Bát lộ Quân, làm việc tại bộ phận cơ yếu điện đài đóng tại thôn Mạc Lộ, ngoại ô thành phố Quảng Tây, Trung Quốc vào năm 1938."
      },
      {
        "id": 45,
        "title": "Trong những năm 1936-1939, phong trào dân chủ phát triển rộng khắp nước ta, lôi cuốn hàng triệu quần chúng tham gia chống chủ nghĩa phát xít và chế độ thuộc địa đòi quyền dân chủ, dân sinh. Mít tinh của quần chúng ngày 01-5-1933 tại khu Đấu xảo, Hà Nộ"
      },
      {
        "id": 46,
        "title": "Cột mốc 108, thuộc xã Trường Hà, huyện Hà Quảng, tỉnh Cao Bằng, nơi đầu tiên Bác đặt chân lên quê hương sau 30 năm xa cách."
      },
      {
        "id": 47,
        "title": "Ngày 28 tháng 01 năm 1941, Nguyễn Ái Quốc về nước ở Pác Bó (Cao Bằng), trực tiếp lãnh đạo cách mạng Việt Nam."
      },
      {
        "id": 48,
        "title": "Lán Khuổi Nậm, Pác Bó, Cao Bằng, nơi Chủ tịch Hồ Chí Minh chủ trì Hội nghị Trung ương 8 của Đảng Cộng sản Đông Dương (tháng 5 năm 1941) họp quyết định thành lập Việt Nam độc lập đồng minh (Mặt trận Việt Minh) lãnh đạo nhân dân cả nước thực hiện nhiệm vụ giải phóng dân tộc."
      },
      {
        "id": 49,
        "title": "Lán Khuổi Nậm, Pác Bó, Cao Bằng, nơi Chủ tịch Hồ Chí Minh chủ trì Hội nghị Trung ương 8 của Đảng Cộng sản Đông Dương (tháng 5 năm 1941) họp quyết định thành lập Việt Nam độc lập đồng minh (Mặt trận Việt Minh) lãnh đạo nhân dân cả nước thực hiện nhiệm vụ giải phóng dân tộc."
      },
      {
        "id": 50,
        "title": "Lán Khuổi Nậm, Pác Bó, Cao Bằng, nơi Chủ tịch Hồ Chí Minh chủ trì Hội nghị Trung ương 8 của Đảng Cộng sản Đông Dương (tháng 5 năm 1941) họp quyết định thành lập Việt Nam độc lập đồng minh (Mặt trận Việt Minh) lãnh đạo nhân dân cả nước thực hiện nhiệm vụ giải phóng dân tộc."
      },
      {
        "id": 51,
        "title": "Trên phiến đá này, năm 1944, Chủ tịch Hồ Chí Minh đã dịch cuốn Lịch sử Đảng Cộng sản Liên Xô và nhiều tài liệu khác ra tiếng Việt."
      },
      {
        "id": 52,
        "title": "Bìa tập thơ Ngục trung nhật ký của Hồ Chí Minh"
      },
      {
        "id": 53,
        "title": "Cây đa Tân Trào, nơi xuất phát của Giải phóng Quân lên đường chiến đấu tiến về Hà Nội ngày 16-8-1945."
      },
      {
        "id": 54,
        "title": "Ngày 16 tháng 8 năm 1945, Quốc dân Đại hội do Mặt trận Việt Minh triệu tập ở đình Tân Trào (tỉnh Tuyên Quang) quyết định tổng khởi nghĩa và bầu ra Ủy ban Giải phóng dân tộc (tức Chính phủ lâm thời) do Hồ Chí Minh làm Chủ tịch"
      },
      {
        "id": 55,
        "title": "Theo chỉ thị của Hồ Chí Minh, đội Việt Nam tuyên truyền giải phóng Quân, hình thức ban đầu của Quân đội Nhân dân ngày nay được thành lập ngày 22-12-1944."
      },
      {
        "id": 56,
        "title": ""
      },
      {
        "id": 57,
        "title": "“Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thực đã thành một nước tự do và độc lập. Toàn thể dân Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do và độc lập ấy ”"
      },
      {
        "id": 58,
        "title": "Ngày 02 tháng 9 năm 1945 tại Hà Nội, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa, mở ra kỷ nguyên mới của lịch sử dân tộc. Câu hỏi của Người “Tôi nói đồng bào nghe rõ không?” từ đây khắc sâu trong trái tim mỗi người dân Việt Nam."
      }
    ],
    [
      {
        "id": 59,
        "title": "Chủ tịch Hồ Chí Minh trong phòng làm việc của Người ở Phủ Chủ tịch năm 1946"
      },
      {
        "id": 60,
        "title": "Ngày 31 tháng 5 năm 1946, Chủ tịch Hồ Chí Minh dẫn đầu đoàn đại biểu chính phủ ta sang đàm phán chính thức với chính phủ Pháp"
      },
      {
        "id": 61,
        "title": "Quốc hội đầu tiên của nước Việt Nam Dân chủ Cộng hòa ra đời sau cuộc tuyển cử đầu tiên trong cả nước ngày 06 tháng 01 năm 1946."
      },
      {
        "id": 62,
        "title": "Chính phủ dân chủ cách mạng đầu tiên của nước Việt Nam Dân chủ Cộng hòa do Hồ Chí Minh làm Chủ tịch được thành lập và ra mắt quốc dân."
      },
      {
        "id": 63,
        "title": "Tháng 02 năm 1946, Chủ tịch Hồ Chí Minh nói chuyện với hơn 10 vạn nhân dân thủ đô Hà Nội sau cuộc tổng tuyển cử bầu ra Quốc hội đầu tiên của nước Việt Nam Dân chủ Cộng hòa."
      },
      {
        "id": 64,
        "title": "Chủ tịch Hồ Chí Minh với Thủ tướng Pháp Georges tại Pháp, ngày 02 tháng 07 năm 1946."
      },
      {
        "id": 65,
        "title": "Sau khi ký với chính phủ Pháp bản tạm ước 14-9-1946, Chủ tịch Hồ Chí Minh tuyên bố quyết tâm của toàn dân tộc Việt Nam nhất định không chịu làm nô lệ lần nữa."
      },
      {
        "id": 66,
        "title": ""
      },
      {
        "id": 67,
        "title": "Trong ngôi nhà này tại làng Vạn Phúc, tỉnh Hà Đông, Chủ tịch Hồ Chí Minh và Thường vụ Trung ương Đảng đã họp Hội nghị quyết định tiến hành cuộc trường kỳ kháng chiến chống thực dân Pháp."
      },
      {
        "id": 68,
        "title": "Ngôi nhà sàn đơn sơ, nơi ở và làm việc của Chủ tịch Hồ Chí Minh tại Việt Bắc trong cuộc kháng chiến chống thực dân Pháp."
      },
      {
        "id": 69,
        "title": "Vị Chủ tịch nước đích thân vác cuốc tăng gia sản xuất để tham gia “diệt giặc đói”."
      },
      {
        "id": 70,
        "title": "Năm 1949, Đoàn đại biểu thanh niên Nam Bộ ra thăm miền Bắc đã tới quây quần bên vị lãnh tụ kính yêu của dân tộc. Miền Nam là nơi đầu tiên trong cả nước phải chống Pháp tái chiếm (từ 23-9-1945)"
      },
      {
        "id": 71,
        "title": "Từ chiếc máy chữ này, Chủ tịch Hồ Chí Minh đã cho ra đời nhiều văn kiện quan hệ đến vận mệnh của Tổ quốc."
      },
      {
        "id": 72,
        "title": "Chủ tịch Hồ Chí Minh sống và làm việc tại Hang Bồng thuộc xã Tân Trào, huyện Sơn Dương, tỉnh Tuyên Quang, năm 1951."
      },
      {
        "id": 73,
        "title": "Chủ tịch Hồ Chí Minh họp với Thường vụ Trung ương Đảng quyết định mở chiến dịch Biên giới năm 1950."
      },
      {
        "id": 74,
        "title": "Chủ tịch Hồ Chí Minh lội suối đi công tác."
      },
      {
        "id": 75,
        "title": "Chủ tịch Hồ Chí Minh thăm các đơn vị bộ đội tham gia chiến dịch Biên giới."
      },
      {
        "id": 76,
        "title": "Chủ tịch Hồ Chí Minh trên đài quan sát Mặt trận Đông Khê (Cao Bằng) năm 1950."
      },
      {
        "id": 77,
        "title": "Chủ tịch Hồ Chí Minh - người sáng lập và lãnh đạo quân đội ta - theo dõi mặt trận suốt thời gian chiến dịch Biên giới. Nơi ở của Người chuyển theo các trận đánh, có khi chỉ là túp lều cỏ dựng tạm vài hôm."
      },
      {
        "id": 78,
        "title": "Chủ tịch Hồ Chí Minh - vị tổng tư lệnh tối cao."
      },
      {
        "id": 79,
        "title": "Ở Việt Bắc, Bác Hồ thường đến thăm gia đình đồng bào các dân tộc"
      },
      {
        "id": 80,
        "title": "Nhận định về triển vọng cuộc kháng chiến chống thực dân Pháp, Chủ tịch Hồ Chí Minh viết trong báo cáo: “Nay tuy châu chấu đá voi, Nhưng mai voi sẽ bị lòi ruột ra”."
      },
      {
        "id": 81,
        "title": "Chủ tịch Hồ Chí Minh trong phòng làm việc của Người ở căn cứ Việt Bắc."
      },
      {
        "id": 82,
        "title": "Chủ tịch Hồ Chí Minh với các đại biểu Đại hội thống nhất Việt Minh – Liên Việt, năm 1951."
      },
      {
        "id": 83,
        "title": "Cuối năm 1953, Chủ tịch Hồ Chí Minh và các đồng chí lãnh đạo Đảng quyết định mở chiến dịch Điện Biên Phủ."
      },
      {
        "id": 84,
        "title": "Chủ tịch Hồ Chí Minh thưởng huy hiệu cho các chiến sĩ có nhiều chiến công ở Điện Biên Phủ."
      },
      {
        "id": 85,
        "title": "Sau 58 ngày đêm chiến đấu, ngày 07-5-1954, quân ta toàn thắng ở Điện Biên Phủ. Lá cờ quyết chiến quyết thắng của Hồ Chủ tịch tặng các đơn vị tham gia chiến dịch Điện Biên Phủ tung bay phấp phới trên nắp hầm chỉ huy của địch."
      }
    ],
    [
      {
        "id": 86,
        "title": "Bác tát nước chống hạn ở cánh đồng Quang Tó, xã Đại Thanh, tỉnh Hà Tây (1958)"
      },
      {
        "id": 87,
        "title": "Bác kéo lưới cùng ngư dân Sầm Sơn, Thanh Hóa"
      },
      {
        "id": 88,
        "title": "Đến thăm nhà máy xe lửa Gia Lâm, Bác nhắc nhở công nhân, cán bộ phát huy truyền thống cách mạng của nhà máy, ra sức xây dựng miền Bắc, ủng hộ miền Nam"
      },
      {
        "id": 89,
        "title": "Ngày 30-5-1957, Bác thăm cảng Hải Phòng và nói chuyện với nhân dân thành phố."
      },
      {
        "id": 90,
        "title": "Bác đi thăm dây chuyền sản xuất và vận chuyển than ở khu mỏ Quảng Ninh (1965)"
      },
      {
        "id": 91,
        "title": "Ngày 01 tháng 01 năm 1960, Chủ tịch Hồ Chí Minh ký sắc lệnh công bố hiến pháp xã hội chủ nghĩa đầu tiên của nước ta."
      },
      {
        "id": 92,
        "title": "Ngày 05 tháng 9 năm 1960, Đảng Lao động Việt Nam họp Đại hội đại biểu toàn quốc lần thứ 3. Trong diễn văn khai mạc, Người nêu rõ: “… Đại hội lần này là đại hội xây dựng chủ nghĩa xã hội ở miền Bắc và đấu tranh hòa bình thống nhất nước nhà”."
      },
      {
        "id": 93,
        "title": "Bác bắt nhịp bài “Kết đoàn” trong buổi hòa nhạc mừng Đại hội Đảng năm 1960."
      },
      {
        "id": 94,
        "title": "Đại biểu học sinh Trường trung học Trưng Vương (Hà Nội) đến chúc thọ Bác (tháng 5-1956)"
      },
      {
        "id": 95,
        "title": "Bác thăm lớp bổ túc văn hóa khu lao động Lương Yên, Hà Nội (1956)"
      },
      {
        "id": 96,
        "title": "Bác thăm bệnh viện Bạch Mai, Hà Nội (21-3-1960)."
      },
      {
        "id": 97,
        "title": "Đại hội văn nghệ toàn quốc lần thứ 2 (1957) vui sướng chào mừng Chủ tịch Hồ Chí Minh."
      },
      {
        "id": 98,
        "title": "Tại Đại hội lần thứ 3 những người viết báo Việt Nam, Chủ tịch Hồ Chí Minh – nhà báo vô sản đầu tiên và lớn nhất của Việt Nam – căn dặn: “Cán bộ báo chí cũng là chiến sĩ cách mạng. Cây bút trang giấy là vũ khí sắc bén”."
      },
      {
        "id": 99,
        "title": "Bác với các đại biểu dự Hội nghị Công giáo toàn quốc (09-3-1955)"
      },
      {
        "id": 100,
        "title": "Bác với các đại biểu Hội Phật giáo Việt Nam, ngày 03-01-1957"
      },
      {
        "id": 101,
        "title": "Bác dặn dò thanh niên tại Đại hội đại biểu toàn quốc Đoàn thanh niên Cứu quốc lần thứ 2 (1956)"
      },
      {
        "id": 102,
        "title": "Bác rất quan tâm đến việc giải phóng phụ nữ. Năm 1956 tại Hội nghị cán bộ phụ nữ toàn miền Bắc, Người căn dặn: “Đoàn kết chặt chẽ, ra sức tham gia xây dựng chủ nghĩa xã hội ở miền Bắc, đấu tranh thống nhất nước nhà và giữ gìn hòa bình thế giới. Là con cháu xứng đáng của Bà Trưng, Bà Triệu, chắc các cô sẽ hoàn thành thắng lợi nhiệm vụ vẻ vang ấy”."
      },
      {
        "id": 103,
        "title": "Phụ nữ các dân tộc Tây Bắc vui mừng được gặp Bác Hồ (1959)."
      },
      {
        "id": 104,
        "title": "Hằng ngày, Bác Hồ vun xới cây vú sữa của đồng bào miền Nam gửi tặng với tấm lòng thương yêu vô hạn miền Nam anh hùng. Bác nói: “Miền Nam luôn luôn ở trong trái tim tôi"
      },
      {
        "id": 105,
        "title": "Chủ tịch Hồ Chí Minh thay mặt Đảng Lao động Việt Nam ký vào bản tuyên bố của Hội nghị 81 đảng cộng sản họp tại Moskva (1960)."
      },
      {
        "id": 106,
        "title": "Bulgaria (1957)"
      },
      {
        "id": 107,
        "title": "Indonesia (1959)"
      },
      {
        "id": 108,
        "title": "Chủ tịch Hồ Chí Minh và Hoàng thân Souphanouvong, chủ tịch Mặt trận Lào yêu nước."
      },
      {
        "id": 109,
        "title": "Chủ tịch Hồ Chí Minh và Thủ tướng Ấn Độ Nehru."
      },
      {
        "id": 110,
        "title": "Tại Hội nghị, Bác kêu gọi “mỗi người làm việc bằng hai để đền đáp cho đồng bào miền Nam ruột thịt”."
      },
      {
        "id": 111,
        "title": "Bác thăm bộ đội không quân (1967)."
      },
      {
        "id": 112,
        "title": "Bác và các anh hùng, dũng sĩ miền Nam."
      },
      {
        "id": 113,
        "title": "Bác Hồ với các anh hùng và chiến sĩ thi đua miền Nam. Bác nói: “Chúng ta vô cùng tự hào về miền Nam anh hùng của chúng ta. Suốt 20 năm trời, đồng bào miền Nam ta đã không ngừng đấu tranh để bảo vệ Tổ quốc. Hết chống thực dân Pháp lại chống đế quốc Mỹ, lực lượng yêu nước miền Nam đã vượt mọi gian khổ, khó khăn, càng đánh càng mạnh, càng đánh càng thắng. Thật xứng đáng với danh hiệu Thành đồng Tổ quốc”."
      },
      {
        "id": 114,
        "title": "Bác Hồ tại Đại hội anh hùng, chiến sĩ thi đua chống Mỹ, cứu nước lần thứ 4 (1966)"
      },
      {
        "id": 115,
        "title": "Bác Hồ tặng hoa phong lan cho các đại biểu nữ dân quân Quảng Bình, Vĩnh Linh (tháng 9-1968)"
      },
      {
        "id": 116,
        "title": ""
      },
      {
        "id": 117,
        "title": ""
      }
    ],
    [],
    []
  ]
};
