-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: blog
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blog_identification`
--

DROP TABLE IF EXISTS `blog_identification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `blog_identification` (
  `user_identity` int(1) NOT NULL,
  `identification_name` varchar(10) NOT NULL,
  PRIMARY KEY (`user_identity`)
) ENGINE=InnoDB DEFAULT CHARSET=gbk;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_identification`
--

LOCK TABLES `blog_identification` WRITE;
/*!40000 ALTER TABLE `blog_identification` DISABLE KEYS */;
INSERT INTO `blog_identification` VALUES (1,'admin');
/*!40000 ALTER TABLE `blog_identification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_user`
--

DROP TABLE IF EXISTS `blog_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `blog_user` (
  `user_id` varchar(12) NOT NULL,
  `user_password` varchar(40) NOT NULL,
  `user_secret` varchar(40) DEFAULT NULL,
  `user_secret_temp` varchar(40) DEFAULT NULL,
  `user_identity` int(11) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=gbk;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_user`
--

LOCK TABLES `blog_user` WRITE;
/*!40000 ALTER TABLE `blog_user` DISABLE KEYS */;
INSERT INTO `blog_user` VALUES ('miotokyo','f600c97abc5ccf1cf6bb78f9fb275b3f','PJ4GESTUMVZFQZJXFQYHIWDLNNBTYZJF',NULL,1);
/*!40000 ALTER TABLE `blog_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `identification`
--

DROP TABLE IF EXISTS `identification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `identification` (
  `User_Identity` int(11) NOT NULL,
  `Identify_Name` char(10) NOT NULL,
  `Max_Borrow_Num` int(11) NOT NULL,
  `Max_Borrow_Time` int(11) NOT NULL,
  PRIMARY KEY (`User_Identity`)
) ENGINE=InnoDB DEFAULT CHARSET=gbk;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `identification`
--

LOCK TABLES `identification` WRITE;
/*!40000 ALTER TABLE `identification` DISABLE KEYS */;
INSERT INTO `identification` VALUES (1,'管理员',30,150),(2,'教职工',30,150),(3,'本科生',10,30),(4,'研究/博士生',15,150);
/*!40000 ALTER TABLE `identification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `user_id` char(14) NOT NULL,
  `user_password` char(100) NOT NULL,
  `user_sex` char(1) DEFAULT NULL,
  `user_secret` varchar(40) DEFAULT NULL,
  `user_secret_temp` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=gbk;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('alice','6cc7af7f2fbb06fd1701ebcd0497a2c2','F',NULL,NULL),('bob','6cc7af7f2fbb06fd1701ebcd0497a2c2','M',NULL,NULL),('candy','6cc7af7f2fbb06fd1701ebcd0497a2c2','M',NULL,NULL),('darcy','6cc7af7f2fbb06fd1701ebcd0497a2c2','M',NULL,NULL),('dom','6cc7af7f2fbb06fd1701ebcd0497a2c2','M',NULL,NULL),('echo','6cc7af7f2fbb06fd1701ebcd0497a2c2','M',NULL,NULL),('frank','6cc7af7f2fbb06fd1701ebcd0497a2c2','M',NULL,NULL),('gary','6cc7af7f2fbb06fd1701ebcd0497a2c2','M',NULL,NULL),('honey','7396b324b5381ff60222ccda29986f40','F',NULL,NULL),('kiki','6cc7af7f2fbb06fd1701ebcd0497a2c2','M',NULL,NULL),('miotokyo','f600c97abc5ccf1cf6bb78f9fb275b3f',NULL,'PJ4GESTUMVZFQZJXFQYHIWDLNNBTYZJF',NULL),('nina','6cc7af7f2fbb06fd1701ebcd0497a2c2','M',NULL,NULL),('security','f600c97abc5ccf1cf6bb78f9fb275b3f',NULL,NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_information`
--

DROP TABLE IF EXISTS `user_information`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user_information` (
  `User_ID` char(13) NOT NULL,
  `User_Password` char(20) NOT NULL,
  `User_Name` char(20) NOT NULL,
  `User_Identity` int(11) NOT NULL,
  PRIMARY KEY (`User_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=gbk;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_information`
--

LOCK TABLES `user_information` WRITE;
/*!40000 ALTER TABLE `user_information` DISABLE KEYS */;
INSERT INTO `user_information` VALUES ('2015210405001','123456','Alice',1),('2015210405002','123456','Bob',2),('2015210405003','123456','Catherine',3),('2015210405004','123456','Drake',4);
/*!40000 ALTER TABLE `user_information` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-19 23:08:32
