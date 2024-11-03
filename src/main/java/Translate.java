import org.antlr.v4.runtime.*;
import java.util.*;
import org.antlr.v4.runtime.tree.*;
public class Translate 
{
    public static void main( String[] args) throws Exception 
    {

        ANTLRInputStream input = new ANTLRInputStream( System.in);

        NaturalLexer lexer = new NaturalLexer(input);

        CommonTokenStream tokens = new CommonTokenStream(lexer);

        NaturalParser parser = new NaturalParser(tokens);
        ParseTree tree = parser.sentence(); // begin parsing at rule 'r'
        System.out.println(tree.toStringTree(parser)); // print LISP-style tree
        ParseTreeWalker walker = new ParseTreeWalker();
        Translator translator = new Translator();
        walker.walk(translator, tree);
        System.out.println(translator.getRegex());
       
    }
}

class Translator extends NaturalBaseListener 
{
	private StringBuilder regex;
	
	public Translator() {
		super();
		this.regex = new StringBuilder();
	}
	
	public String getRegex() { return regex.toString();}

	@Override
	public void enterStrt(NaturalParser.StrtContext ctx)
	{
		regex.append('^');
	}
	
	@Override public void exitEnd(NaturalParser.EndContext ctx) { 
		regex.append('$');
	}
	
	@Override public void enterLiteral(NaturalParser.LiteralContext ctx) {
		
		regex.append('(');
		regex.append(ctx.LIT().getText());
	}
	
@Override public void enterLiteralSimpl(NaturalParser.LiteralSimplContext ctx) {
		
		regex.append('(');
		regex.append(ctx.LIT().getText());
	}
	
	@Override public void exitLiteral(NaturalParser.LiteralContext ctx) {
		regex.append(')');
	}
	
	@Override public void exitLiteralSimpl(NaturalParser.LiteralSimplContext ctx) {
		regex.append(')');
	}
	
	@Override public void enterCharClass(NaturalParser.CharClassContext ctx) { 
		String value = switch(ctx.CHARCLASS().getText()) {
		case "vowels" -> "[aeiouAEIOU]";
		case "letters" -> "\\w";
		case "digits" -> "\\d";
		default -> "";
		}; 
		regex.append(value);
	}
	
	@Override public void enterCharClassSimpl(NaturalParser.CharClassSimplContext ctx) {
		
		String value = switch(ctx.CHARCLASS().getText()) {
		case "vowels" -> "[aeiouAEIOU]";
		case "letters" -> "\\w";
		case "digits" -> "\\d";
		default -> "";
		}; 
		regex.append(value);
		
	}
	
	@Override public void enterNumber(NaturalParser.NumberContext ctx) {
		regex.append('(');
		regex.append(ctx.NUM().getText());
	}
	
	@Override public void enterNumberSimpl(NaturalParser.NumberSimplContext ctx) {
		regex.append('(');
		regex.append(ctx.NUM().getText());
	}
	
	@Override public void exitNumber(NaturalParser.NumberContext ctx) { 
		regex.append(')');
	}
	
	@Override public void exitNumberSimpl(NaturalParser.NumberSimplContext ctx) { 
		regex.append(')');
	}
	
	@Override public void enterCon(NaturalParser.ConContext ctx) { 
		regex.append(ctx.getPayload().getText().equals("or")? '|' : "");
	}
	
	
	
	@Override public void enterDot(NaturalParser.DotContext ctx) { 
		regex.append("(.)");
	}
	
	@Override public void enterDotSimpl(NaturalParser.DotSimplContext ctx) { 
		regex.append("(.)");
	}
	
	@Override public void exitQuantUB(NaturalParser.QuantUBContext ctx) {
		regex.append(ctx.quantifierUB().getText().equals("one or more")? '+' : '*');
	}
	
	/*@Override public void exitPlus(NaturalParser.PlusContext ctx) { 
		regex.append('+');
	}
	
	@Override public void exitKleene(NaturalParser.KleeneContext ctx) { 
		regex.append('*');
	}*/
	
	@Override public void exitBetween(NaturalParser.BetweenContext ctx) { 
		regex.append('{'+ ctx.NUM().get(0).getText() + ',' + ctx.NUM().get(1).getText() + '}');
	}
	
	@Override public void exitExact(NaturalParser.ExactContext ctx) { 
		regex.append('{' + ctx.NUM().getText() + '}');
	}
	
	@Override public void exitLower(NaturalParser.LowerContext ctx) { 
		regex.append('{' + ctx.NUM().getText() + ',' + '}');
	}
	
	
	
	
}
