const var doc_db_add = ""; 
const var pat_db_add = ""; 
var web3 = require('web3');
function validate_doctor()
{
	var eth_add = document.getElementbyId("eth_add");
	var passcode = document.getElementbyId("passcode");
	var doctor_db = DoctorDatabase.at(doc_db_add);	//idhar address daalo
	if(doctor_db.authenticateDoctor(eth_add,passcode)
	{
		window.open("doctor_index.html","_self");
	}
}

function validate_patient()
{
	var eth_add = document.getElementbyId("eth_add");
	var passcode = document.getElementbyId("passcode");
	var patient_db = DoctorDatabase.at(pat_db_add);	//idhar address daalo
	if(patient_db.authenticateDoctor(eth_add,passcode)
	{
		window.open("patient_index.html","_self");
	}
}