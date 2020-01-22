import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function LoginScreen(props) {
	const [ errorMessage, setErrorMessage ] = useState(null);
	const handleLogin = () => {
		console.log(email, password);
	};
	return (
		<View style={styles.container}>
			<View style={styles.errorMessage}>
				{errorMessage ? <Text style={styles.error}> {errorMessage} </Text> : null}
			</View>

			<View style={styles.form}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						marginTop: 12
					}}
				>
					<Image style={{ width: 120, height: 82 }} source={require('../../assets/icons/logo.png')} />
				</View>
			</View>
			<TouchableOpacity style={styles.button} onPress={() => {}}>
				<View style={{ flex: 1, alignItems: 'center' }}>
					<Image style={{ width: 16, height: 16 }} source={require(`../../assets/icons/g.png`)} />
				</View>

				<Text
					style={{
						color: '#FFF',
						fontWeight: '500',
						textAlign: 'left',
						flex: 5,
						fontSize: 14
					}}
				>
					SIGN IN WITH GOOGLE
				</Text>
			</TouchableOpacity>
			<View style={{ marginTop: 10 }} />
			<TouchableOpacity style={styles.buttonf} onPress={() => {}}>
				<View style={{ flex: 1, alignItems: 'center' }}>
					<Image style={{ width: 16, height: 16 }} source={require(`../../assets/icons/fb.png`)} />
				</View>

				<Text
					style={{
						color: '#FFF',
						fontWeight: '500',
						textAlign: 'left',
						flex: 5,
						fontSize: 14
					}}
				>
					SIGN IN WITH FACEBOOK
				</Text>
			</TouchableOpacity>

			<View style={{ flexDirection: 'row', marginHorizontal: 45, marginTop: 30 }}>
				<View
					style={{
						marginVertical: 15,
						borderWidth: 0.5,
						borderColor: '#999999',
						flex: 3,
						height: 1
					}}
				/>

				<Text style={{ flex: 1, color: '#999999', fontSize: 16, textAlign: 'center', marginTop: 3 }}>or </Text>
				<View
					style={{
						marginVertical: 15,
						borderWidth: 0.5,
						borderColor: '#999999',
						flex: 3,
						height: 1
					}}
				/>
			</View>

			<TouchableOpacity style={styles.mobile} onPress={handleLogin}>
				<Text
					style={{
						textAlign: 'left',
						color: '#999999',
						fontWeight: '500'
					}}
				>
					Sign in with your phone number
				</Text>
			</TouchableOpacity>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 30
	},

	errorMessage: {
		height: 72,
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: 30
	},
	error: {
		color: '#6CBAD9',
		fontSize: 13,
		fontWeight: '600',
		textAlign: 'center'
	},
	form: {
		marginBottom: 48,
		marginHorizontal: 30
	},
	inputTitle: {
		color: '#8A8F9E',
		fontSize: 10,
		textTransform: 'uppercase'
	},
	input: {
		borderBottomColor: '#8A8F9E',
		borderBottomWidth: StyleSheet.hairlineWidth,
		height: 40,
		fontSize: 15,
		color: '#161F3D'
	},
	button: {
		marginTop: 73.5,
		marginHorizontal: 30,
		backgroundColor: '#E34F4F',
		borderRadius: 45,
		height: 46,

		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	mobile: {
		marginHorizontal: 42,
		marginTop: 12,
		paddingHorizontal: 20,

		borderWidth: 1,
		borderColor: '#999999',

		borderRadius: 7,
		height: 35,

		justifyContent: 'center'
	},
	buttonf: {
		marginHorizontal: 30,
		marginTop: 4.8,
		backgroundColor: '#425BB4',
		borderRadius: 45,
		height: 46,

		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
});
