<?php
	if ((isset($_POST['name']) && $_POST['name'] != "") &&
		(isset($_POST['phone']) && $_POST['phone'] != "") &&
		(isset($_POST['email']) && $_POST['email'] != "")) {
		$to = 'alkor.sx@gmail.com';
		$subject = 'Заявка';
		$message = '
				<html>
					<head>
						<title>'.$subject.'</title>
					</head>
					<body>
						<p>Имя: '.$_POST['name'].'</p>
						<p>Телефон: '.$_POST['phone'].'</p>
						<p>Email: '.$_POST['email'].'</p>
						<p>Компания: '.$_POST['organization'].'</p>
						<p>Сообщение: '.$_POST['text'].'</p>
					</body>
				</html>';
		$headers = "Content-type: text/html; charset=utf-8 \r\n";
		$headers .= "From: <alkor.sx@gmail.com>\r\n";
		mail($to, $subject, $message, $headers);

		$url = $_SERVER['HTTP_REFERER'];
		header("Location: $url");
	}
?>
