package com.prog.service;
import com.prog.perser.*;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.prog.entity.FileUpload;
import com.prog.repository.DatabaseRepository;

import java.io.ByteArrayInputStream;
import java.util.Scanner;
import java.util.regex.*; 

@Service
public class FileService {
	@Autowired
	private DatabaseRepository dbFilerepo;
	
	// storing the file to database
	public FileUpload storeFile(MultipartFile file) throws IOException
		{
		  String filename=StringUtils.cleanPath(file.getOriginalFilename());
		  String filetype=file.getContentType();//save file type
		
		  FileUpload dbFile= new FileUpload(file.getBytes(),filename,filetype);
		  
		  return dbFilerepo.save(dbFile);	
		}
	
	
	//Retrieving the file from database
	public FileUpload getFile(Integer fileId) throws FileNotFoundException
		{
		
			return dbFilerepo.findById(fileId)
				.orElseThrow(()-> new FileNotFoundException("File Not Found"+fileId));
		}
	
	
	//for searching words in that particular file
	public Integer[] searchFile(Integer file_id_use, String query) throws Exception
		{
		  ArrayList<Integer> list=new ArrayList<Integer>();
		
		  String generatedregex=Translate.getRegex(query);
		  
		  //Reading the word to be found from the user
	      Pattern p = Pattern.compile(generatedregex);
	      
	      //^(K)*(n)$
	      int count = -1;
	      
	      //Reading the contents of the file
	      
	      byte[] barr=dbFilerepo.findById(file_id_use).get().getOriginalfile();
	      ByteArrayInputStream myfile=new ByteArrayInputStream(barr);
	      Scanner sc = new Scanner(myfile);
	      while(sc.hasNext())
	      {
	          count++;
	          String word=sc.next();
	          Matcher m = p.matcher(word);
	          if(m.matches())
	           {
	             list.add(count);
	            }
	      }

	      sc.close();
 		  Integer[] array = list.toArray (new Integer [list.size()]);
		  return array;
	} 
}
