DROP TABLE IF EXISTS `blog_user`;
CREATE TABLE `blog_user` (
  `user_id` varchar(12) NOT NULL,
  `user_password` varchar(40) NOT NULL,
  `user_secret` varchar(40) DEFAULT NULL,
  `user_secret_temp` varchar(40) DEFAULT NULL,
  `user_identity` int(11) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=gbk;

DROP TABLE IF EXISTS `blog_identification`;
CREATE TABLE `blog_identification` (
  `user_identity` int(1) NOT NULL,
  `identification_name` varchar(10) NOT NULL,
  PRIMARY KEY (`user_identity`)
) ENGINE=InnoDB DEFAULT CHARSET=gbk;

INSERT INTO `blog_user` VALUES ('miotokyo', 'f600c97abc5ccf1cf6bb78f9fb275b3f', NULL, NULL, 1);
INSERT INTO `blog_identification` VALUES (1, 'admin');