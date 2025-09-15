const AboutSection = () => {
	return (
		<div className="defaultContainer">
			<div className="space-y-4">
				<p>
					Hello, my name is Benjamin! I'm a first-year student at Cornell University, originally from Millburn, New Jersey. 
					I'm interested in solving socially important problems (e.g. in healthcare and the environment) with computing, particularly with AI and computer vision.
					I also enjoy exploring the outdoors, running, studying geography, and writing. 
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
