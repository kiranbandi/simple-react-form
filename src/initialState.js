export default {
    "form": {
        "metaData": [{
            name: "Personal Information",
            elements: [{
                'key': 'firstName',
                inputType: 'text',
                'label': 'First Name'
            }, {
                'key': 'lastName',
                inputType: 'text',
                'label': 'Last Name'
            }, {
                'key': 'fathersName',
                inputType: 'text',
                'label': 'Father\'s Name'
            }, {
                'key': 'mothersName',
                inputType: 'text',
                'label': 'Mother\'s Name'
            }, {
                'key': 'dob',
                inputType: 'date',
                'label': 'Date of Birth'
            }]
        }, {
            name: "Address Details",
            elements: [{
                'key': 'addressPermSubHeading',
                inputType: 'subHeading',
                'label': 'Permanent Address'
            }, {
                'key': 'permStreet1',
                inputType: 'text',
                'label': 'Street 1'
            }, {
                'key': 'permStreet2',
                inputType: 'text',
                'label': 'Street 2'
            }, {
                'key': 'permCity',
                inputType: 'text',
                'label': 'City'
            }, {
                'key': 'permState',
                inputType: 'text',
                'label': 'State'
            }, {
                'key': 'permZip',
                inputType: 'text',
                'label': 'ZIP/Postal Code'
            }, {
                'key': 'addressPresSubHeading',
                inputType: 'subHeading',
                'label': 'Present Address'
            }, {
                'key': 'presStreet1',
                inputType: 'text',
                'label': 'Street 1'
            }, {
                'key': 'presStreet2',
                inputType: 'text',
                'label': 'Street 2'
            }, {
                'key': 'presCity',
                inputType: 'text',
                'label': 'City'
            }, {
                'key': 'presState',
                inputType: 'text',
                'label': 'State'
            }, {
                'key': 'presZip',
                inputType: 'text',
                'label': 'ZIP/Postal Code'
            }]
        }, {
            name: "Education Details",
            elements: [{
                'key': 'examDummy',
                inputType: 'text',
                'label': 'Enter Dummy Exam Name'
            }, {
                'key': 'examScore',
                inputType: 'customExamScoreInput',
                'label': 'Exam Score'
            }]
        },
        {
            name: "Experience Details",
            elements: [{
                'key': 'expDummy',
                inputType: 'text',
                'label': 'Enter Dummy Experience Name'
            }, {
                'key': 'ExperienceScore',
                inputType: 'customExperienceInput',
                'label': 'Experience Score'
            }]
        }],
        "data": {}
    }
};
