package pages.app
import geb.Page

import pages.app.CodewithusPage
import modules.LoginModule
import org.openqa.selenium.By
import org.openqa.selenium.Keys
import extensions.AngularJSAware

class HomePage extends Page implements AngularJSAware {
    
	static at = { angularReady && title == "BCDevExchange" }
    static url = ""
    static content = {
        login { module LoginModule  }
        
        //Links
        //HomeLink { PositionAndClick("a","home") }
		HomeLink { $("img", class:"navbar-brand" ).click() }
		AboutLink { PositionAndClick("a","about") }
		AccessibilityLink { PositionAndClick("a","accessibility") }
		CodewithusLink { PositionAndClick("a","codewithus") }
		//CopyrightLink { PositionAndClick("a","copyright") } Link was removed
		DisclaimerLink { PositionAndClick("a","disclaimer") }
		PrivacyLink { PositionAndClick("a","privacy") }
		RoadmapLink { PositionAndClick("a","roadmap") }
		SigninadminLink { PositionAndClick("a","authentication.signinadmin") }
		OpportunitiesNavBar { $('a[ui-sref ~= "opportunities.list"]', 0).click() }
		ProjectsNavbar { $('a[ui-sref ~= "projects.list"]', 0).click() }
		ProgramsNavbar { $('a[ui-sref ~= "programs.list"]', 0).click() }
		SigninLink { PositionAndClick("a","authentication.signin") }
		SignUpNavBar { PositionAndClick("a","authentication.gov") }
		SignUpMidPageLink { PositionAndClick("a","authentication.gov",1) }
		CompaniesNavbar { $('a[ui-sref ~= "orgs.list"]', 0).click()    }
		FindWorkButton { $(By.xpath('//a[contains(., "Find work")]'), 0).click() }
		learnMoreLink(to: CodewithusPage) { $(By.xpath('//a[contains(., "Learn more")]'), 0).click() }
    }

    // Since webdriver does not want to click on non-visible links,
    // we have to position the test page show the links before we can click on it.
    // Currently this function only support links with an id.
    Boolean PositionAndClick(String elementType, String elementId, int index=0) {
    		js.exec('document.getElementById("' + elementId + '").scrollIntoView(true);')
			$("$elementType", id:"$elementId")[index].click()
			return true
    }
 	//Use as InjectLibrary('https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js') to inject dependencies
    void InjectLibrary( String library ){
       def ok = browser.driver.executeScript("document.body.appendChild(document.createElement(\'script\')).src=\'$library\'")
    }
}
