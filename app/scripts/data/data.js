angular.module('chatApp').constant('DATA', {
	CHAT:{
		channel: [
			{
				id:1,
				name:"general",
				description: "channel description here",
				createdBy: "user 1",
				createdOn: "1 January 2010",
				members: [
					{name:"user 1"},
					{name:"user 2"},
					{name:"user 3"},
				]
			},
			{
				id:2,
				name:"beer",
				description: "channel description here",
				createdBy: "user 1",
				createdOn: "1 January 2010",
				members: [
					{name:"user 1"},
					{name:"user 2"},
					{name:"user 3"},
				]
			},
			{
				id:3,
				name:"beer",
				description: "channel description here",
				createdBy: "user 2",
				createdOn: "1 January 2010",
				members: [
					{name:"user 2"},
					{name:"user 3"},
				]
			},
			{
				id:4,
				name:"beer",
				description: "channel description here",
				createdBy: "user 1",
				createdOn: "1 January 2010",
				members: [
					{name:"user 1"},
					{name:"user 2"},
					{name:"user 3"},
				]
			},
		],
		users: [
			{
				id:1,
				name:"user 1",
				password:"123",
				avatar:"images/avatar.png"
			},
			{
				id:2,
				name:"user 2",
				password:"123",
				avatar:"images/avatar.png"
			},
			{
				id:3,
				name:"user 3",
				password:"123",
				avatar:"images/avatar.png"
			},
			{
				id:4,
				name:"user 4",
				password:"123",
				avatar:"images/avatar.png"
			},
			{
				id:5,
				name:"user 5",
				password:"123",
				avatar:"images/avatar.png"
			},
			{
				id:6,
				name:"user 6",
				password:"123",
				avatar:"images/avatar.png"
			},
			{
				id:7,
				name:"user 7",
				password:"123",
				avatar:"images/avatar.png"
			},
		],
		group: [
			{
				id:1,
				name:"group 1",
				description: "group description here",
				members: [
					{name:"user 1"},
					{name:"user 2"},
					{name:"user 3"},
				]
			},
			{
				id:2,
				name:"group 2",
				description: "group description here",
				members: [
					{name:"user 1"},
					{name:"user 2"},
					{name:"user 3"},
				]
			},
			{
				id:3,
				name:"group 3",
				description: "group description here",
				members: [
					{name:"user 1"},
					{name:"user 2"},
					{name:"user 3"},
				]
			},
			{
				id:4,
				name:"group 4",
				description: "group description here",
				members: [
					{name:"user 1"},
					{name:"user 2"},
					{name:"user 3"},
				]
			},
		]
	}
});