grammar Natural;

sentence: ('start'|'starts') 'with' sentence					#strt
		| ('end'|'ends') 'with' sentence						#end
		| sentence con sentence	    							#connector
		| con sentence											#prefixCon
		| quantifierB											#quantB
		| quantifierUB simplSent	                			#quantUB
		| ('any' |'any character' | 'anything'| 'characters')	#dot
		| CHARCLASS												#charClass
		| LIT													#literal
		| NUM													#number
		;
		
		
simplSent : simplSent con simplSent					#connectorSimpl
		  | ('any' |'any character' | 'any thing')	#dotSimpl
		  | CHARCLASS								#charClassSimpl
		  | LIT										#literalSimpl
		  | NUM										#numberSimpl
		  ;	
		
con 	:'and'
		|'has'
		|'and has'
		|'contains'
		|'and contains'     
		|'or'	
		;
		
quantifierB : 'between' NUM 'and' NUM simplSent				#between
		    | 'exactly' NUM simplSent						#exact
		    | 'at least' NUM simplSent						#lower
		    ;	
		    
quantifierUB : 'one or more' 	           				#plus						
		     | ('any number of' | 'zero or more') 	    #kleene	
		     ;	    

CHARCLASS: 'vowels' | 'letters' | 'digits';		
LIT     : [A-Za-z]+ ;
NUM     : [0-9]+ ;
WS      : [ \t\r\n]+ -> skip ;


