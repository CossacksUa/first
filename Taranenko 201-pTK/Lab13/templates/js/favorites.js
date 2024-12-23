function doFavoritesListRate( rate, id ) 
{
	ShowLoading('');

	$.get(dle_root + "engine/ajax/controller.php?mod=favorites_list_rating", { 
		go_rate: rate, 
		f_id: id, 
		skin: dle_skin, 
		user_hash: dle_login_hash 
	}, function(data) {
		HideLoading('');

		if ( data.success ) {
			var rating = data.rating;

			rating = rating.replace(/&lt;/g, "<");
			rating = rating.replace(/&gt;/g, ">");
			rating = rating.replace(/&amp;/g, "&");

			$("#favorites_list-ratig-layer-" + id).html(rating);
			$("#favorites_list-vote-num-id-" + id).html(data.votenum);
		} else if (data.error) {
			DLEalert ( data.errorinfo, dle_info );
		}
	}, "json");
};