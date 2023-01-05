const Contact = () => {
    return ( 
        <div>
            <div class="main">
			<table class="main">
				<tr>
				<th>Email:</th>  
				<td>chefkissunlimitedllc@gmail.com</td>      
				</tr>  
				<tr>
				<th>Phone:</th>
				<td>(817) 793-0098</td>
				</tr>
			</table>
		</div>

		<div class="fcf-body">

			<div id="fcf-form">
			<h3 class="fcf-h3">How May I Serve You?</h3>
		
			<form onsubmit="sendEmail(); reset(); return false;">
				
				<div class="fcf-form-group">
					<label for="Name" class="fcf-label">Your name</label>
					<div class="fcf-input-group">
						<input type="text" id="name" name="name" class="fcf-form-control" required/>
					</div>
				</div>
		
				<div class="fcf-form-group">
					<label for="Email" class="fcf-label">Your email address</label>
					<div class="fcf-input-group">
						<input type="email" id="email" name="email" class="fcf-form-control" required/>
					</div>
				</div>

				<div class="fcf-form-group">
					<label for="Phone" class="fcf-label">Your phone number</label>
					<div class="fcf-input-group">
						<input type="text" id="phone" name="phone" class="fcf-form-control" required/>
					</div>
				</div>

				<label for="stateShip">Your state</label>
					<select id="stateShip" name="stateShip">
						<option value="AL">Alabama</option>
						<option value="AK">Alaska</option>
						<option value="AZ">Arizona</option>
						<option value="AR">Arkansas</option>
						<option value="CA">California</option>
						<option value="CO">Colorado</option>
						<option value="CT">Connecticut</option>
						<option value="DE">Delaware</option>
						<option value="DC">District Of Columbia</option>
						<option value="FL">Florida</option>
						<option value="GA">Georgia</option>
						<option value="HI">Hawaii</option>
						<option value="ID">Idaho</option>
						<option value="IL">Illinois</option>
						<option value="IN">Indiana</option>
						<option value="IA">Iowa</option>
						<option value="KS">Kansas</option>
						<option value="KY">Kentucky</option>
						<option value="LA">Louisiana</option>
						<option value="ME">Maine</option>
						<option value="MD">Maryland</option>
						<option value="MA">Massachusetts</option>
						<option value="MI">Michigan</option>
						<option value="MN">Minnesota</option>
						<option value="MS">Mississippi</option>
						<option value="MO">Missouri</option>
						<option value="MT">Montana</option>
						<option value="NE">Nebraska</option>
						<option value="NV">Nevada</option>
						<option value="NH">New Hampshire</option>
						<option value="NJ">New Jersey</option>
						<option value="NM">New Mexico</option>
						<option value="NY">New York</option>
						<option value="NC">North Carolina</option>
						<option value="ND">North Dakota</option>
						<option value="OH">Ohio</option>
						<option value="OK">Oklahoma</option>
						<option value="OR">Oregon</option>
						<option value="PA">Pennsylvania</option>
						<option value="RI">Rhode Island</option>
						<option value="SC">South Carolina</option>
						<option value="SD">South Dakota</option>
						<option value="TN">Tennessee</option>
						<option value="TX">Texas</option>
						<option value="UT">Utah</option>
						<option value="VT">Vermont</option>
						<option value="VA">Virginia</option>
						<option value="WA">Washington</option>
						<option value="WV">West Virginia</option>
						<option value="WI">Wisconsin</option>
						<option value="WY">Wyoming</option>
					</select>
		
				<div class="fcf-form-group">
					<label for="Message" class="fcf-label">Your message</label>
					<div class="fcf-input-group">
						<textarea id="message" name="message" class="fcf-form-control" rows="6" maxlength="3000" required></textarea>
					</div>
				</div>
		
				<div class="fcf-form-group">
					<button type="submit" id="fcf-button" class="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Send Message</button>
				</div>
		
			</form>
			</div>
		
		</div>
        </div>
     );
}
 
export default Contact;