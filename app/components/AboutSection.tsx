const AboutSection = () => {
	return (
		<div className="defaultContainer">
			<div className="space-y-4">
				<p>
					Hello, my name is Benjamin - thanks for visiting my website! Originally from Millburn, New Jersey, 
					I'm a first-year student interested in solving socially important problems (e.g. in healthcare and the environment) with computing, particularly with AI and computer vision.
					I'm also an outdoors & geography enjoyer, runner, and writer. 
				</p>
                {/* bold the text */}
                
                <p>
                    <strong>
                        Visit my resume at <a href = "https://docs.google.com/document/d/1rGBNSfRg_27TwEU3BC8TAr93X0xbvLYlha7TMjKU5oE" target = "_blank">this link</a> for a full list of what I've done!
                    </strong>
                </p>
			</div>
		</div>
	);
};

export default AboutSection;
